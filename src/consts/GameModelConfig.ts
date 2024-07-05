// 创建模型
const GameModel = [
    // 井字棋信息
    {
        mode: 0,
        name: 'TicTacToe',
        boardSize: 3, // 棋盘大小
        playerCount: 2, // 玩家数量
        winCount: 3, // 获胜所需的连续棋子数
        SquareClass: 'TicTacToeSquare', // 棋子格子样式
        SquareClassSpan: 'TicTacToeSquareSpan', // 棋子样式
        XSquare: 'GoBangSquareSpan', // X样式
        OSquare: 'GoBangSquareSpan', // X样式
    },
    // 五子棋信息
    {
        mode: 1,
        name: 'GoBang',
        boardSize: 15, // 棋盘大小
        playerCount: 2, // 玩家数量
        winCount: 5, // 获胜所需的连续棋子数
        SquareClass: 'GoBangSquare', // 棋子格子样式
        SquareClassSpan: 'GoBangSquareSpan', // 棋子样式
        XSquare: 'XSquare', // X样式
        OSquare: 'OSquare', // X样式
    },
];

// 导出模型实例
export default GameModel;