import { CellState } from '@/shared/types';
import type { Cell } from '@/shared/types';

export const getCellColor = (state: CellState) => {
    switch (state) {
        case CellState.EMPTY:
            return 'bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800/50';
        case CellState.WALL:
            return 'bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-700/80 shadow-lg';
        case CellState.START:
            return 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] border border-emerald-400 cursor-grab active:cursor-grabbing';
        case CellState.END:
            return 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-[0_0_15px_rgba(244,63,94,0.5)] border border-rose-400 cursor-grab active:cursor-grabbing';
        case CellState.MEETING_POINT:
            return "bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)] border border-emerald-300 ring-2 ring-emerald-500/50"
        case CellState.VISITED:
            return 'bg-violet-600/90 shadow-[0_0_15px_rgba(139,92,246,0.6)] border border-violet-400 ring-2 ring-violet-500/40';
        case CellState.QUEUE:
            return 'bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_12px_rgba(14,165,233,0.6)] border border-sky-300/60';
        case CellState.PATH:
            return 'bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_15px_rgba(251,191,36,0.6)] border border-amber-300';
        default:
            return 'bg-slate-900/80 border border-slate-800/50';
    }
};

export const getCellDistance = (cell: Cell, inf: number) => {
    if (
        [CellState.VISITED, CellState.PATH, CellState.MEETING_POINT].includes(cell.state) &&
        cell.distance !== inf
    ) {
        return cell.distance;
    }
};

type GetCellIdProps = {
    row: number;
    col: number;
    sizeC: number;
};

export const getCellId = ({ row, col, sizeC }: GetCellIdProps) => {
    return row * sizeC + col;
};

export const extractCellRowCol = (id: number, sizeC: number) => {
    const row = Math.trunc(id / sizeC);
    const col = id % sizeC;

    return { row, col };
};

export const extractRowColFromElem = (elem: HTMLDivElement, sizeC: number) => {
    const cellId = Number(elem.dataset.id);
    return extractCellRowCol(cellId, sizeC);
};
