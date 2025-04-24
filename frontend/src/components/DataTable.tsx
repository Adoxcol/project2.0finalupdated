import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import {
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/table';

interface Post {
  id: number;
  title: string;
  content: string;
  numericValue: number;
  author: { email: string };
}

interface DataTableProps {
  data: Post[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const columns = useMemo<ColumnDef<Post>[]>(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Title',
        accessorKey: 'title',
      },
      {
        header: 'Content',
        accessorKey: 'content',
      },
      {
        header: 'Numeric Value',
        accessorKey: 'numericValue',
      },
      {
        header: 'Author Email',
        accessorFn: (row) => row.author.email,
        id: 'authorEmail',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  const {
    getHeaderGroups,
    getRowModel,
    previousPage,
    nextPage,
    getState,
    getCanPreviousPage,
    getCanNextPage,
  } = table;

  const { pageIndex } = getState().pagination;

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          {getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box mt={4} display="flex" alignItems="center" gap={3}>
        <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          Next
        </Button>
        <Text>
          Page {pageIndex + 1}
        </Text>
      </Box>
    </Box>
  );
};

export default DataTable;
