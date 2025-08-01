export type Variant = {
  id: string | number | null;
  product_id: string | number | null;
  material_id: string | number | null;
  sku: string | null;
  sales_price: string | number | null;
  purchase_price: string | number | null;
  config_attributes: {
    config_name: string;
    config_value: string;
  }[];
  type: string | null;
  minimum_order_quantity: string | number | null;
  lead_time: string | number | null;
  deleted_at: string | null;
  internal_barcode: string | null;
  supplier_item_codes: unknown[];
  registered_barcode: string | null;
  custom_fields?: Record<string, unknown>[];
  updated_at: string | null;
  created_at: string | null;
  limit: number;
  page: number;
};
