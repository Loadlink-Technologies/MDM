window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v6216","name":"PmaExpenseLine","subtype":"VIEW","is_user_defined":false,"description":null,"script":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PmaExpenseLine"},{"field":"Type","value":"View"}],"columns":[{"id":"column-94885","object_id":"column-94885","name":"DocumentNumber","name_without_path":"DocumentNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94886","object_id":"column-94886","name":"TransactionType","name_without_path":"TransactionType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94887","object_id":"column-94887","name":"SequenceNumber","name_without_path":"SequenceNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94888","object_id":"column-94888","name":"EmployeeId","name_without_path":"EmployeeId","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94889","object_id":"column-94889","name":"TransactionDate","name_without_path":"TransactionDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94890","object_id":"column-94890","name":"ProjectNumber","name_without_path":"ProjectNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94891","object_id":"column-94891","name":"CostCategory","name_without_path":"CostCategory","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94892","object_id":"column-94892","name":"ItemNumber","name_without_path":"ItemNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94893","object_id":"column-94893","name":"Quantity","name_without_path":"Quantity","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94894","object_id":"column-94894","name":"UnitOfMeasure","name_without_path":"UnitOfMeasure","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"9","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94895","object_id":"column-94895","name":"BaseQty","name_without_path":"BaseQty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94896","object_id":"column-94896","name":"UnitOfMeasureSchedule","name_without_path":"UnitOfMeasureSchedule","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94897","object_id":"column-94897","name":"UnitCost","name_without_path":"UnitCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94898","object_id":"column-94898","name":"OriginatingUnitCost","name_without_path":"OriginatingUnitCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94899","object_id":"column-94899","name":"BaseUnitCost","name_without_path":"BaseUnitCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94900","object_id":"column-94900","name":"OriginatingBaseUnitCost","name_without_path":"OriginatingBaseUnitCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94901","object_id":"column-94901","name":"ExtendedCost","name_without_path":"ExtendedCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94902","object_id":"column-94902","name":"OriginatingExtendedCost","name_without_path":"OriginatingExtendedCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94903","object_id":"column-94903","name":"TotalCost","name_without_path":"TotalCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94904","object_id":"column-94904","name":"OriginatingTotalCost","name_without_path":"OriginatingTotalCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94905","object_id":"column-94905","name":"OverheadAmount","name_without_path":"OverheadAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94906","object_id":"column-94906","name":"OriginatingOverheadAmount","name_without_path":"OriginatingOverheadAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94907","object_id":"column-94907","name":"BaseOverheadCost","name_without_path":"BaseOverheadCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94908","object_id":"column-94908","name":"OriginatingOverheadCost","name_without_path":"OriginatingOverheadCost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94909","object_id":"column-94909","name":"OverheadPercentage","name_without_path":"OverheadPercentage","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94910","object_id":"column-94910","name":"TotalOverhead","name_without_path":"TotalOverhead","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94911","object_id":"column-94911","name":"OriginatingTotalOverhead","name_without_path":"OriginatingTotalOverhead","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94912","object_id":"column-94912","name":"BillingRate","name_without_path":"BillingRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94913","object_id":"column-94913","name":"OriginatingBillingRate","name_without_path":"OriginatingBillingRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94914","object_id":"column-94914","name":"BaseBillingRate","name_without_path":"BaseBillingRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94915","object_id":"column-94915","name":"OriginatingBaseBillingRate","name_without_path":"OriginatingBaseBillingRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94916","object_id":"column-94916","name":"MarkupPercentage","name_without_path":"MarkupPercentage","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94917","object_id":"column-94917","name":"AccruedRevenues","name_without_path":"AccruedRevenues","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94918","object_id":"column-94918","name":"OriginatingAccruedRevenues","name_without_path":"OriginatingAccruedRevenues","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94919","object_id":"column-94919","name":"ProfitAmount","name_without_path":"ProfitAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94920","object_id":"column-94920","name":"OriginatingProfitAmount","name_without_path":"OriginatingProfitAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94921","object_id":"column-94921","name":"ProfitPercent","name_without_path":"ProfitPercent","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94922","object_id":"column-94922","name":"OriginatingProfipPercent","name_without_path":"OriginatingProfipPercent","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94923","object_id":"column-94923","name":"TotalProfit","name_without_path":"TotalProfit","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94924","object_id":"column-94924","name":"ProfitType","name_without_path":"ProfitType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94925","object_id":"column-94925","name":"StandardQuantity","name_without_path":"StandardQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94926","object_id":"column-94926","name":"NoChargeQuantity","name_without_path":"NoChargeQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94927","object_id":"column-94927","name":"NonBillableQuantity","name_without_path":"NonBillableQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94928","object_id":"column-94928","name":"ReferenceNumber","name_without_path":"ReferenceNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"17","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94929","object_id":"column-94929","name":"ReferenceLineSequence","name_without_path":"ReferenceLineSequence","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94930","object_id":"column-94930","name":"BillingType","name_without_path":"BillingType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94931","object_id":"column-94931","name":"ContractNumber","name_without_path":"ContractNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94932","object_id":"column-94932","name":"BillingNoteID","name_without_path":"BillingNoteID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"41","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94933","object_id":"column-94933","name":"BackoutPurchasesAmount","name_without_path":"BackoutPurchasesAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94934","object_id":"column-94934","name":"OriginatingBackoutPurchasesAmount","name_without_path":"OriginatingBackoutPurchasesAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94935","object_id":"column-94935","name":"PurchaseTaxOptions","name_without_path":"PurchaseTaxOptions","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94936","object_id":"column-94936","name":"TaxAmount","name_without_path":"TaxAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94937","object_id":"column-94937","name":"OriginatingTaxAmount","name_without_path":"OriginatingTaxAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94938","object_id":"column-94938","name":"BackoutTaxAmount","name_without_path":"BackoutTaxAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94939","object_id":"column-94939","name":"OriginatingBackoutTaxAmount","name_without_path":"OriginatingBackoutTaxAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94940","object_id":"column-94940","name":"RoundAmount","name_without_path":"RoundAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94941","object_id":"column-94941","name":"OriginatingReimbursableAmount","name_without_path":"OriginatingReimbursableAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94942","object_id":"column-94942","name":"ReimbursableAmount","name_without_path":"ReimbursableAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94943","object_id":"column-94943","name":"PaymentMethod","name_without_path":"PaymentMethod","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94944","object_id":"column-94944","name":"ExpenseType","name_without_path":"ExpenseType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94945","object_id":"column-94945","name":"BillingStatus","name_without_path":"BillingStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94946","object_id":"column-94946","name":"ItemTaxScheduleID","name_without_path":"ItemTaxScheduleID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94947","object_id":"column-94947","name":"MCCurrencyID","name_without_path":"MCCurrencyID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94948","object_id":"column-94948","name":"MCBillingRate","name_without_path":"MCBillingRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94949","object_id":"column-94949","name":"MCBaseBillingRate","name_without_path":"MCBaseBillingRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94950","object_id":"column-94950","name":"MCAccruedRevenue","name_without_path":"MCAccruedRevenue","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94951","object_id":"column-94951","name":"CurrencyIndex","name_without_path":"CurrencyIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94952","object_id":"column-94952","name":"RateTypeID","name_without_path":"RateTypeID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94953","object_id":"column-94953","name":"ExchangeTableID","name_without_path":"ExchangeTableID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94954","object_id":"column-94954","name":"ExchangeRate","name_without_path":"ExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94955","object_id":"column-94955","name":"ExchangeDate","name_without_path":"ExchangeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94956","object_id":"column-94956","name":"ExchangeTime","name_without_path":"ExchangeTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94957","object_id":"column-94957","name":"RateCalcMethod","name_without_path":"RateCalcMethod","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94958","object_id":"column-94958","name":"DenExchangeRate","name_without_path":"DenExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-94959","object_id":"column-94959","name":"MCTrxState","name_without_path":"MCTrxState","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};