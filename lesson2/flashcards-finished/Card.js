import React from 'react';
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TouchableWithoutFeedback 

} from 'react-native';

export default class Card extends React.Component {
  state = {
    showTerm:false
  }

  /*
    Flips the showTerm flag in our state
  */
  flipCard = () => {
    this.setState({
      showTerm: !this.state.showTerm
    });
    // Fill this out
  }

  render() {
    const textStyle = (this.state.showTerm) ? (styles.termText): (styles.definitionText);
    return(
      <TouchableWithoutFeedback onPress={this.flipCard}>
        <View style={styles.conatiner}>
          <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
          <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
        </View>
      </TouchableWithoutFeedback>  
      );
   
  } 
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300
  }, 
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    
    position: 'absolute',
    left: 20,
    top: 20
  },
  termText: {
    fontSize: 50,
    
  },
  definitionText: {
    fontSize: 30,
    
  }
}); 