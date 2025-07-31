export type Product = {
  ids?: number[];
  name?: string;
  uom?: string;
  is_sellable?: boolean;
  is_producible?: boolean;
  is_purchasable?: boolean;
  is_auto_assembly?: boolean;
  default_supplier_id?: number;
  batch_tracked?: boolean;
  serial_tracked?: boolean;
  operations_in_sequence?: boolean;
  purchase_uom?: string;
  purchase_uom_conversion_rate?: number;
  extend?: string[];
  include_deleted?: boolean;
  include_archived?: boolean;
  limit?: string; // Consider using number if server accepts numeric input
  page?: string; // Same note as above
  created_at_min?: string; // ISO 8601 format expected
  created_at_max?: string;
  updated_at_min?: string;
  updated_at_max?: string;
};
