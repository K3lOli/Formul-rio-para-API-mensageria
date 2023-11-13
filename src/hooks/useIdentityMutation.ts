import { useMutation } from "@tanstack/react-query";
import { personData } from "../interfaces/person-data";
import axios from "axios";

const postData = (data: personData) => {
    return axios.post("http://localhost:3200/send", data);
}

export function useIdentityMutation() {
    const { mutate, isPending, isSuccess, isError } = useMutation({
        mutationFn: (data: personData) => postData(data),
    })

    return {
        mutate,
        isPending,
        isSuccess,
        isError,
    }
}