import React, {useEffect} from 'react';
import { Text, View, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as scoreAction from '../store/action';

export default function ScoreScreen () {
  const dispatch = useDispatch()

  const scores = useSelector(state => state.scores.score);
  scores.sort((a,b)=>{return b.score - a.score})

  useEffect(() => {
    dispatch(scoreAction.setScores());
  }, [dispatch]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            <FlatList
                data={scores}
                keyExtractor={item => item.name}
                renderItem={itemData => (
                  <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around',  }}>
                   <Text style={{fontSize: 30 }}>Score : {itemData.item.score}       Name : {itemData.item.name}</Text>
                  </View>
                )}
              />     
      </View>
    );
  }
  