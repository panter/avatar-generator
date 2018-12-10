import React from 'react';
import flat from 'flat';
import GriddleReact from 'griddle-react';

const List = ({
  resultsPerPage, collectionName, collection, publications, gotoEdit, columns, columnMetadata, listTransformEntry, filteredFields, baseQuery, sortBy,
}) => (
  <div>
    <GriddleReact
      transformResult={listTransformEntry || flat}
      columns={columns}
      columnMetadata={columnMetadata}
      publication={publications.list}
      collection={collection}
      externalResultsPerPage={resultsPerPage}
      matchingResultsCount={publications.counts}
      filteredFields={filteredFields}
      initialSort={sortBy || columns[0]}
      onRowClick={event => gotoEdit(collectionName, event.props.data._id)}
      showFilter
      baseQuery={baseQuery}
    />
  </div>
);

List.displayName = 'Admin.List';

export default List;
