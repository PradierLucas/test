import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';



const edit = ({ auth, contact }) => {

    const initialValues = {
        name: contact.name,
        avatar: null, 
        phone: contact.phone,
        visibility: contact.visibility
    }
    const { data, errors, setData, post,recentlySuccessful } = useForm(initialValues)

  

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.update', contact));
    }



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={

                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Contacto</h2>
                    <Link href={route('contact.index')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contactos</Link>
                </div>
            }


        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <form onSubmit={submit} className="space-y-4" method="post" encType="multipart/form-data">

                             <Transition
                                                    show={recentlySuccessful}
                                                    enter="transition ease-in-out"
                                                    enterFrom="opacity-0"
                                                    leave="transition ease-in-out"
                                                    leaveTo="opacity-0"
                                                >
                                                    <p className="text-sm text-gray-600">Usuario Actualizado !!</p>
                                                </Transition>
                                <div>


                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"

                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>


                                    <InputLabel htmlFor="phone" value="Tel" />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"

                                        onChange={(e) => setData('phone', e.target.value)}
                                    />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                                <div>


                                    <InputLabel htmlFor="avatar" value="Avatar" />

                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                       
                                        className="mt-1 block w-full"

                                        onChange={(e) => setData('avatar', e.target.files[0])}
                                    /> 

                                    <InputError message={errors.avatar} className="mt-2" />
                                </div>
                                <div>


                                    <InputLabel htmlFor="visibility" value="Visibilidad" />

                                   <select 
                                   name="visibility" 
                                   id="visibility" 
                                   value={data.visibility} 
                                   onChange={(e) => setData('visibility', e.target.value)} 
                                   className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm '}>
                                        <option value="">Seleccionar</option>
                                        <option value="public">Publico</option>
                                        <option value="private">Privado</option>

                                    </select>

                                    <InputError message={errors.visibility} className="mt-2" />
                                </div>

                                 <div className="flex justify-between">   
                                <PrimaryButton>
                                    Actualizar Contacto
                                </PrimaryButton>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default edit