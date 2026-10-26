
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>شمارنده امتیاز</Text>

      <View style={styles.card}>
        <Text style={styles.playerName}>بازیکن اول</Text>
        <Text style={styles.score}>{player1}</Text>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setPlayer1((score) => Math.max(0, score - 1))}
          >
            <Text style={styles.buttonText}>−</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => setPlayer1((score) => score + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.playerName}>بازیکن دوم</Text>
        <Text style={styles.score}>{player2}</Text>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setPlayer2((score) => Math.max(0, score - 1))}
          >
            <Text style={styles.buttonText}>−</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => setPlayer2((score) => score + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={styles.resetButton}
        onPress={() => {
          setPlayer1(0);
          setPlayer2(0);
        }}
      >
        <Text style={styles.resetText}>شروع دوباره</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1f2a40',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  playerName: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
  },
  score: {
    color: '#60a5fa',
    fontSize: 52,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#334155',
    width: 70,
    height: 55,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#dc2626',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  resetText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
