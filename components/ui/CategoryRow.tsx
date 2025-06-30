import { Pencil, Trash2 } from 'lucide-react';

interface ItemRowProps {
    name: string;
    id: number;
    onEdit?: () => void;
    onSelect?: (id: number) => void;
    addNew?: () => void;
}

export const CategoryRow = ({ name, id = 0, onEdit, onSelect, addNew }: ItemRowProps) => {
    return (
        <div className="flex items-center justify-between border rounded-lg px-4 py-3 shadow-sm bg-white hover:shadow-md transition">
            {addNew != undefined ? (
                <span className="text-gray-600 text-sm font-semibold cursor-pointer hover:text-gray-800 transition" onClick={addNew}>Agregar</span>
            ) : (
                <div className="w-[220px] h-[100px] p-2 rounded-md border shadow-sm flex items-center justify-between">
                    <span className="text-gray-800 text-sm leading-tight break-words text-left max-w-[140px] underline cursor-pointer" onClick={() => onSelect?.(id)}>
                        {name}
                    </span>
                    <div className="flex flex-col gap-2 shrink-0">
                        <button
                            onClick={onEdit}
                            className="p-2 rounded-md bg-yellow-400 hover:bg-yellow-500 transition text-white cursor-pointer"
                            title="Editar"
                        >
                            <Pencil className="w-4 h-4" />
                        </button>
                        {/* <button
                            onClick={onDelete}
                            className="p-2 rounded-md bg-red-500 hover:bg-red-600 transition text-white"
                            title="Eliminar"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button> */}
                    </div>
                </div>

            )}

        </div>
    );
};
