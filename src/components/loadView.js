import { useState } from 'react';
import { ActivityIndicator,StyleSheet,ImageBackground} from 'react-native';

const loadView = () =>{
    const [load,setLoad] = useState(true);
  
    if (load) {
        return (
       
            <ActivityIndicator
                style={styles.load}
                animating={load}
                color={'brown'}
                size={'large'}
                
            />
           
        );
    }
}
const styles = StyleSheet.create({
    
   load:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
   },
})
export default loadView; 