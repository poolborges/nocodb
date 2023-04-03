const create = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "nc_col_relations_v2",
  "type": "object",
  "properties": {
  "id": {"type": "string", "maxLength": 20},
  "ref_db_alias": {"type": "string", "maxLength": 255},
  "type": {"type": "string", "maxLength": 255},
  "virtual": {"type": "boolean"},
  "db_type": {"type": "string", "maxLength": 255},
  "fk_column_id": {"type": "string", "maxLength": 20},
  "fk_related_model_id": {"type": "string", "maxLength": 20},
  "fk_child_column_id": {"type": "string", "maxLength": 20},
  "fk_parent_column_id": {"type": "string", "maxLength": 20},
  "fk_mm_model_id": {"type": "string", "maxLength": 20},
  "fk_mm_child_column_id": {"type": "string", "maxLength": 20},
  "fk_mm_parent_column_id": {"type": "string", "maxLength": 20},
  "ur": {"type": "string", "maxLength": 255},
  "dr": {"type": "string", "maxLength": 255},
  "fk_index_name": {"type": "string", "maxLength": 255},
  "deleted": {"type": "boolean"},
  "created_at": {"type": "string", "format": "date-time"},
  "updated_at": {"type": "string", "format": "date-time"}
},
  "required": ["id", "virtual", "created_at", "updated_at"],
  "additionalProperties": false
}

const update = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "nc_col_relations_v2",
  "type": "object",
  "properties": {
    "id": {"type": "string", "maxLength": 20},
    "ref_db_alias": {"type": "string", "maxLength": 255},
    "type": {"type": "string", "maxLength": 255},
    "virtual": {"type": "boolean"},
    "db_type": {"type": "string", "maxLength": 255},
    "fk_column_id": {"type": "string", "maxLength": 20},
    "fk_related_model_id": {"type": "string", "maxLength": 20},
    "fk_child_column_id": {"type": "string", "maxLength": 20},
    "fk_parent_column_id": {"type": "string", "maxLength": 20},
    "fk_mm_model_id": {"type": "string", "maxLength": 20},
    "fk_mm_child_column_id": {"type": "string", "maxLength": 20},
    "fk_mm_parent_column_id": {"type": "string", "maxLength": 20},
    "ur": {"type": "string", "maxLength": 255},
    "dr": {"type": "string", "maxLength": 255},
    "fk_index_name": {"type": "string", "maxLength": 255},
    "deleted": {"type": "boolean"},
    "created_at": {"type": "string", "format": "date-time"},
    "updated_at": {"type": "string", "format": "date-time"}
  },
  "required": ["id", "virtual", "created_at", "updated_at"],
  "additionalProperties": false
}


export {
  create,
  update,
}
