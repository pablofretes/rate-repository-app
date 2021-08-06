import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Formik } from 'formik';
import useCreateReview from '../hooks/useCreateReview';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required(),
    repositoryName: yup
        .string()
        .required(),
    rating: yup
        .number('Rating must be a number')
        .required()
        .positive('Rating must be a at least 0')
        .integer()
        .min(0, 'Rating must be a number between 0 and 100')
        .max(100, 'Rating must be a number between 0 and 100')
    ,
    review: yup
        .string()
});

const ReviewForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name='ownerName' placeholder='Repository Owner Name' style={styles.inputs}/>
            <FormikTextInput name='repositoryName' placeholder='Repository Name' style={styles.inputs}/>
            <FormikTextInput name='rating' placeholder='Rating' style={styles.inputs}/>
            <FormikTextInput name='review' placeholder='review' multiline style={styles.multiline}/>
            <Pressable onPress={onSubmit}>
                <Text color='appBar' style={styles.createReview}>Send Review</Text>
            </Pressable>
        </View>
    );
};

const CreateReviewContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit}/>}
        </Formik>
  );
};

const CreateReview = () => {
    const [createReview] = useCreateReview();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating,  review } = values;
        
        try {
            await createReview({ ownerName, repositoryName, rating, review });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CreateReviewContainer onSubmit={onSubmit} />
    );
};

const styles = StyleSheet.create({
    createReview: {
        backgroundColor: '#0366d6',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 8,
        height: 50,
        width: 300,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    inputs: {
        margin: 10,
        borderRadius: 5,
        padding: 15,
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    multiline: {
        margin: 10,
        borderRadius: 5,
        padding: 15,
        height: 250,
        width: 300,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default CreateReview;