import { useBudgetStore } from '@/stores/useBudgetStore';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const balance = useBudgetStore((s) => s.balance);
  const income = useBudgetStore((s) => s.income);
  const expence = useBudgetStore((s) => s.expense);
  const addIncome = useBudgetStore((s) => s.addIncome);
  const addExpense = useBudgetStore((s) => s.addExpense);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 50, alignItems: 'center' }}>
        <Text style={{ fontSize: 22, marginBottom: 100 }}>Balance: {balance}</Text>
        <Text style={{ fontSize: 22, marginBottom: 100 }}>Income: {income}</Text>
        <Text style={{ fontSize: 22, marginBottom: 100 }}>Expense: {expence}</Text>

        <Pressable
          onPress={() => addIncome(100)}
          style={{
            backgroundColor: '#0EA051',
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>
            ADD INCOME
          </Text>
        </Pressable>

        <Pressable
          onPress={() => addExpense(50)}
          style={{
            backgroundColor: '#810EFC',
            padding: 16,
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>
            ADD EXPENSE
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}