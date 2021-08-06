import { useMutation } from "@apollo/client";
import { REVIEW_MUTATION } from '../graphql/mutations';
import { useHistory } from "react-router";

const useCreateReview = () => {
    const [mutate, result] = useMutation(REVIEW_MUTATION);
    const history = useHistory();
    
    const createReview = async ({ ownerName, repositoryName, rating, review }) => {
        try {
            const { data } = await mutate({ variables: { ownerName, repositoryName, rating: parseInt(rating), review } });
            if(data){
                history.push(`/repo/${data.createReview.repositoryId}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return [createReview, result];
};

export default useCreateReview;