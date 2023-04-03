// Insert validation schema
const insert = {
  type: 'object',
  properties: {
    base_id: { type: 'string', maxLength: 20 },
    project_id: { type: 'string', maxLength: 128 },
    fk_view_id: { type: 'string', maxLength: 20 },
    heading: { type: 'string', maxLength: 255 },
    subheading: { type: 'string', maxLength: 255 },
    success_msg: { type: 'string', maxLength: 255 },
    redirect_url: { type: 'string', maxLength: 255 },
    redirect_after_secs: { type: 'string', maxLength: 255 },
    email: { type: 'string', maxLength: 255 },
    submit_another_form: { type: 'boolean' },
    show_blank_form: { type: 'boolean' },
    uuid: { type: 'string', maxLength: 255 },
    banner_image_url: { type: 'string', maxLength: 255 },
    logo_url: { type: 'string', maxLength: 255 },
    meta: { type: 'string' }
  },
  additionalProperties: false
};

// Update validation schema
const update = {
  type: 'object',
  properties: {
    base_id: { type: 'string', maxLength: 20 },
    project_id: { type: 'string', maxLength: 128 },
    heading: { type: 'string', maxLength: 255 },
    subheading: { type: 'string', maxLength: 255 },
    success_msg: { type: 'string', maxLength: 255 },
    redirect_url: { type: 'string', maxLength: 255 },
    redirect_after_secs: { type: 'string', maxLength: 255 },
    email: { type: 'string', maxLength: 255 },
    submit_another_form: { type: 'boolean' },
    show_blank_form: { type: 'boolean' },
    uuid: { type: 'string', maxLength: 255 },
    banner_image_url: { type: 'string', maxLength: 255 },
    logo_url: { type: 'string', maxLength: 255 },
    meta: { type: 'string' }
  },
  minProperties: 1,
  additionalProperties: false
};
