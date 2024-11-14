import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const rows = [
    { id: 1, playerName: '하트', winRate: 80, position: '선발', games: 5, era: 2.13, wins: 3, losses: 1, holds: 0, saves: 0, strikeouts: 26, imageUrl: 'https://link_to_image_1' },
    { id: 2, playerName: '요키시', winRate: 50, position: '선발', games: 5, era: 6.00, wins: 1, losses: 1, holds: 0, saves: 0, strikeouts: 15, imageUrl: 'https://link_to_image_2' },
    { id: 3, playerName: '카스타노', winRate: 50, position: '선발', games: 4, era: 4.33, wins: 2, losses: 2, holds: 0, saves: 0, strikeouts: 23, imageUrl: 'https://link_to_image_3' },
    { id: 4, playerName: '신민혁', winRate: 67, position: '선발', games: 6, era: 3.75, wins: 1, losses: 3, holds: 0, saves: 0, strikeouts: 22, imageUrl: 'https://link_to_image_4' },
    { id: 5, playerName: '이재학', winRate: 33, position: '선발', games: 3, era: 5.14, wins: 1, losses: 2, holds: 0, saves: 0, strikeouts: 14, imageUrl: 'https://link_to_image_5' },
    { id: 6, playerName: '김시훈', winRate: 33, position: '선발', games: 3, era: 4.98, wins: 1, losses: 1, holds: 0, saves: 1, strikeouts: 11, imageUrl: 'https://link_to_image_6' },
    { id: 7, playerName: '이용준', winRate: 29, position: '선발', games: 7, era: 5.68, wins: 0, losses: 3, holds: 1, saves: 0, strikeouts: 9, imageUrl: 'https://link_to_image_7' },
    { id: 8, playerName: '김재열', winRate: 75, position: '구원', games: 16, era: 2.34, wins: 1, losses: 1, holds: 4, saves: 1, strikeouts: 10, imageUrl: 'https://link_to_image_8' },
    { id: 9, playerName: '최성영', winRate: 63, position: '구원', games: 8, era: 5.44, wins: 2, losses: 2, holds: 0, saves: 2, strikeouts: 14, imageUrl: 'https://link_to_image_9' },
    { id: 10, playerName: '임정호', winRate: 83, position: '구원', games: 12, era: 3.43, wins: 3, losses: 2, holds: 8, saves: 1, strikeouts: 12, imageUrl: `${process.env.PUBLIC_URL}/lim.jpg` },
    { id: 11, playerName: '신영우', winRate: 0, position: '구원', games: 3, era: 9.00, wins: 0, losses: 0, holds: 0, saves: 0, strikeouts: 3, imageUrl: `${process.env.PUBLIC_URL}/shin.png` },
    { id: 12, playerName: '이용찬', winRate: 60, position: '구원', games: 20, era: 5.75, wins: 1, losses: 4, holds: 1, saves: 10, strikeouts: 8, imageUrl: 'https://link_to_image_12' },
];

const columns = [
    { field: 'playerName', headerName: '선수명', flex: 1 },
    { field: 'winRate', headerName: '궁합도(직관 경기 승률)', flex: 1 },
    { field: 'position', headerName: '포지션', flex: 1 },
    { field: 'games', headerName: '경기수', flex: 1 },
    { field: 'era', headerName: 'ERA', flex: 1 },
    { field: 'wins', headerName: '승리', flex: 1 },
    { field: 'losses', headerName: '패배', flex: 1 },
    { field: 'holds', headerName: '홀드', flex: 1 },
    { field: 'saves', headerName: '세이브', flex: 1 },
    { field: 'strikeouts', headerName: '탈삼진', flex: 1 },
];

const GunghabTable = () => {

    return (
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
};

export default GunghabTable;
