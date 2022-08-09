import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from '../../api';
import axios from "axios"

const AddService = () => {
    const [imageURL, setImageURL] = useState()
    console.log(imageURL)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL
        }
        const res = await fetcher.post("add-service", serviceData)
        console.log(res)
        reset()
        setImageURL("")
    }
    const handleUploadImage = e => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.set("image", image)
        axios.post("https://api.imgbb.com/1/upload?key=0d8da57f50b2b8d8eb302a30a7e212d5", formData).then((res) => {
            setImageURL(res.data.data.display_url)
        })

    }
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-center text-2xl'>Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Service Name</span>
                            </label>
                            <input type="text" class="input input-bordered" {...register("serviceName")} />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Service Charge</span>
                            </label>
                            <input type="text" class="input input-bordered" {...register("price")} />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Image</span>
                            </label>
                            <input type="file"
                                class="input input-bordered"
                                onChange={handleUploadImage}

                            />

                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary" disabled={!imageURL ? true : false}>Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;