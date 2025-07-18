"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}
const defaultColumns: ColumnDef<any>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
}]
export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const finalColumns: ColumnDef<any, any>[] = [...defaultColumns, ...columns]
    const table = useReactTable({
        data: data,
        columns: finalColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>
            <Table>
                <TableHeader className="bg-gray">
                    {table.getHeaderGroups().map((headerGroup, groupIdx) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header, idx, arr) => {
                                // Apply rounded corners to first and last header cell
                                const roundedClass =
                                  idx === 0 && arr.length === 1
                                    ? "rounded-tl-lg rounded-tr-lg"
                                  : idx === 0
                                    ? "rounded-tl-lg"
                                  : idx === arr.length - 1
                                    ? "rounded-tr-lg"
                                  : "";
                                return (
                                    <TableHead key={header.id} className={cn(roundedClass, 'py-4')}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                className="hover:bg-gray cursor-pointer rounded-lg"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="py-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Rien à afficher.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}