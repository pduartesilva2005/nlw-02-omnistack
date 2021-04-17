import React from 'react';
import { View, Image, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/pedroduarte2005.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Pedro Duarte</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das melhores tecnologias de matemática avançada
                {'\n'}{'\n'}
                Apaixonado por fazer contas díficeis e por mudar a vida das pessoas através de suas experiência.Mais de 1.000.000 pessoas já passaram um dos meus perrengues na matemática.
            </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} />*/}
            <Image source={unFavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
              Entrar em Contato
                        </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem