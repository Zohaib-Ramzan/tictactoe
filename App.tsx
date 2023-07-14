import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [isCross, setIsCross] = useState<Boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false),
      setGameWinner(''),
      setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[1] === gameState[2] &&
      gameState[0] != 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5] &&
      gameState[3] != 'empty'
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8] &&
      gameState[6] != 'empty'
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor : "#000000",
        textColor:"#FFFFFF"
      })
    }
    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return Snackbar.show({
        text : "Position is already Filled!",
        backgroundColor : "red",
        textColor : '#FFF'
      })
    }
    checkIsWinner()
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
