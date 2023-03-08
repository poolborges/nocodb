import { T } from 'nc-help';
import { validatePayload } from '../meta/api/helpers';
import { Hook, Model } from '../models';
import type { HookReqType, HookTestReqType } from 'nocodb-sdk';

import { invokeWebhook } from '../meta/helpers/webhookHelpers';
import populateSamplePayload from '../meta/helpers/populateSamplePayload';

export async function hookList(param: { tableId: string }) {
  // todo: pagination
  return await Hook.list({ fk_model_id: param.tableId });
}

export async function hookCreate(param: {
  tableId: string;
  hook: HookReqType;
}) {
  validatePayload('swagger.json#/components/schemas/HookReq', param.hook);

  T.emit('evt', { evt_type: 'webhooks:created' });
  // todo: type correction
  const hook = await Hook.insert({
    ...param.hook,
    fk_model_id: param.tableId,
  } as any);
  return hook;
}

export async function hookDelete(param: { hookId: string }) {
  T.emit('evt', { evt_type: 'webhooks:deleted' });
  await Hook.delete(param.hookId);
  return true;
}

export async function hookUpdate(param: { hookId: string; hook: HookReqType }) {
  validatePayload('swagger.json#/components/schemas/HookReq', param.hook);

  T.emit('evt', { evt_type: 'webhooks:updated' });

  // todo: correction in swagger
  return await Hook.update(param.hookId, param.hook as any);
}

export async function hookTest(param: {
  tableId: string;
  hookTest: HookTestReqType;
}) {
  validatePayload(
    'swagger.json#/components/schemas/HookTestReq',
    param.hookTest
  );

  const model = await Model.getByIdOrName({ id: param.tableId });

  const {
    hook,
    payload: { data, user },
  } = param.hookTest;
  await invokeWebhook(
    new Hook(hook),
    model,
    data,
    user,
    (hook as any)?.filters,
    true
  );

  T.emit('evt', { evt_type: 'webhooks:tested' });

  return true;
}
export async function tableSampleData(param: {
  tableId: string;
  operation: 'insert' | 'update';
}) {
  const model = await Model.getByIdOrName({ id: param.tableId });

  return await populateSamplePayload(model, false, param.operation);
}