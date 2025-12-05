import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Dados mockados para simular as disciplinas do aluno
const mockDisciplinas = [
  {
    id: '1',
    nome: 'Programação Mobile',
    professor: 'Dr. Alan Turing',
    status: 'Em Andamento',
    aulas: 32,
    frequencia: '85%',
  },
  {
    id: '2',
    nome: 'Estrutura de Dados',
    professor: 'Prof. Grace Hopper',
    status: 'Concluída',
    aulas: 40,
    frequencia: '95%',
  },
  {
    id: '3',
    nome: 'Banco de Dados',
    professor: 'Ms. Ada Lovelace',
    status: 'Em Andamento',
    aulas: 28,
    frequencia: '70%',
  },
  {
    id: '4',
    nome: 'Redes de Computadores',
    professor: 'Eng. Vint Cerf',
    status: 'Pendente',
    aulas: 0,
    frequencia: '0%',
  },
];

// Componente para renderizar cada item da lista
const DisciplinaItem = ({ disciplina }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.infoContainer}>
      <Text style={styles.disciplinaNome}>{disciplina.nome}</Text>
      <Text style={styles.professorNome}>Professor: {disciplina.professor}</Text>
      <Text style={styles.detalhe}>Aulas: {disciplina.aulas} | Frequência: {disciplina.frequencia}</Text>
    </View>
    <View style={[styles.statusBadge, styles[disciplina.status.replace(/\s/g, '')]]}>
      <Text style={styles.statusText}>{disciplina.status}</Text>
    </View>
  </TouchableOpacity>
);

const Disciplinas = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockDisciplinas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DisciplinaItem disciplina={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7', // Cor de fundo suave
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  disciplinaNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  professorNome: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  detalhe: {
    fontSize: 12,
    color: '#999',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  // Estilos para os diferentes status
  EmAndamento: {
    backgroundColor: '#007bff', // Azul
  },
  Concluída: {
    backgroundColor: '#28a745', // Verde
  },
  Pendente: {
    backgroundColor: '#ffc107', // Amarelo
  },
});

export default Disciplinas;