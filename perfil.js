import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import perfil from "../assets/maozinhaa.png"

export default function Perfil() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={perfil}
                />
                <Text style={styles.nome}>maozinhaa</Text>
                <Text style={styles.curso}>Análise e Desenvolvimento de Sistemas</Text>
            </View>

            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Meu Desempenho</Text>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('disciplinas')} // Adicionado o onPress para navegar
                >
                    <Ionicons name="book-outline" size={30} color={'#0f62fe'} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.cardTitulo}>Disciplinas Ativas</Text>
                        <Text style={styles.cardValor}>4</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8'
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#c8003c',
        paddingVertical: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 65,
        marginBottom: 10
    },
    nome: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    curso: {
        color: '#EAEAEAEA',
        fontSize: 15,
        marginTop: 15
    },
    conteudo: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15
    },
    card:{
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems:' center',
        padding: 15,
        marginBottom: 15,
        // O flex: 0.48 foi removido para que o card ocupe a largura total
    },
    cardTitulo: {
        fontSize: 14,
        color: '#555'
    },
    cardValor: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});