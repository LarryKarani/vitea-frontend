import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './invoiceTableHeader';
import InvoiceTableRow from './invoiceTableRow';
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace';
import InvoiceTableFooter from './invoiceTableFooter';

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd',
  },
});

const InvoiceItemsTable = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={invoice.products} />
    <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.products.length} />
    <InvoiceTableFooter items={invoice.products} />
  </View>
);

export default InvoiceItemsTable;
