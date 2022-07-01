import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm,Link } from '@inertiajs/inertia-react';
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

export default function Edit(props) {
    const { data, setData, patch, processing, errors } = useForm({
        title: props.todo[0].title,
        content: props.todo[0].content,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        patch(route("todo.update", props.todo[0].id));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">TodoList</h2>}
        >
            <Head title="TodoList Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200"> 
                     <h3 className='create'>Edit</h3>
                     <ValidationErrors errors={errors} />
                            <form onSubmit={submit}>
                                <div>
                                    <Label forInput="title" value="Title" />

                                    <Input
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <Label forInput="content" value="Content" />

                                    <Input
                                        type="text"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button
                                        className="ml-4 bg-gray-600"
                                        processing={processing}
                                    >
                                        Update
                                    </Button>
                                </div>
                                <div className="flex items-center justify-end mt-4">

                                <Link href={route("todo.index")}>
                  <Button className="ml-4 bg-gray-600" type="button">Return</Button>
                </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}