import React from "react";

import styles from "./Table.module.css";

import ButtonIcon from "../ButtonIcon";

export interface Column<T> {
    header: string;
    accessor: keyof T;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    handleEdit?: (item: T) => void;
    handleDelete?: (item: T) => void;
}

export const Table = <T,>({columns, data, handleEdit, handleDelete}: TableProps<T>): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={styles.th}>{column.header}</th>
                    ))}
                    {(handleEdit || handleDelete) && <th className={styles.th}>Ações</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, columnIndex) => (
                            column.accessor == "image" ?
                            <td key={columnIndex} className={styles.td}>
                                <img src={item[column.accessor] as string} alt="Imagem" />
                            </td>
                            :
                            <td key={columnIndex} className={styles.td}>{item[column.accessor]}</td>
                        ))}
                        {(handleEdit || handleDelete) && (
                            <td className={styles.td}>
                                {handleEdit && <ButtonIcon onClick={() => handleEdit(item)}><img width="30" height="30" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new"/></ButtonIcon>}

                                
                                {handleDelete && <ButtonIcon onClick={() => handleDelete(item)} red={true}>< img  width = " 30 "  height = " 30 "  src = " https://img.icons8.com/ios-glyphs/30/filled-trash.png "  alt = " fill-trash " /></ButtonIcon>}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};