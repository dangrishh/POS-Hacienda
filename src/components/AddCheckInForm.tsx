import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from "../styles/CheckInFormStyles"

const AddCheckinForm = () => {
    return (
        <View>
            <View style={style.overlay}>
                <View style={style.formContainer}>
                    <View style={style.topPart}>

                    </View>
                    <View style={style.middlePart}>

                    </View>
                    <View style={style.bottomPart}>

                    </View>
                </View>
            </View>

        </View>
    );
};

export default AddCheckinForm