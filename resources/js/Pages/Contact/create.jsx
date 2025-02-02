import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const CreateContact = ({ auth }) => {
    const initialValues = {
        persona: '',
        nombre: '',
        segundoNombre: '',
        apellido: '',
        foto: null,
        pais: '',
        domicilio: '',
        identidadPersonal: '',
        identidadTributaria: '',
        codigoAccesoRapido: '',
        observacion: '',
        provincia: '',
        condicionTributaria: '',
        telefonoFijo: '',
        telefonoMovil: '',
        email: '',
        codigoPostal: '',
    };

    const { data, errors, setData, post, reset } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="font-weight-bold">Crear Contacto</h2>
                    <Link href={route('contact.index')} className="btn btn-primary">Contactos</Link>
                </div>
            }
        >
            <Head title="Crear Contacto" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form onSubmit={submit} className="row g-3">
                                {/* Información Personal */}
                                <h4 className="mb-3">Información Personal</h4>

                                <div className="col-md-6">
                                    <label htmlFor="persona" className="form-label">Persona</label>
                                    <select
                                        id="persona"
                                        name="persona"
                                        value={data.persona}
                                        onChange={(e) => setData('persona', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="fisica">Física</option>
                                        <option value="juridica">Jurídica</option>
                                    </select>
                                    {errors.persona && <div className="text-danger mt-1">{errors.persona}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        id="nombre"
                                        type="text"
                                        name="nombre"
                                        value={data.nombre}
                                        className="form-control"
                                        onChange={(e) => setData('nombre', e.target.value)}
                                    />
                                    {errors.nombre && <div className="text-danger mt-1">{errors.nombre}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="segundoNombre" className="form-label">Segundo Nombre</label>
                                    <input
                                        id="segundoNombre"
                                        type="text"
                                        name="segundoNombre"
                                        value={data.segundoNombre}
                                        className="form-control"
                                        onChange={(e) => setData('segundoNombre', e.target.value)}
                                    />
                                    {errors.segundoNombre && <div className="text-danger mt-1">{errors.segundoNombre}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                    <input
                                        id="apellido"
                                        type="text"
                                        name="apellido"
                                        value={data.apellido}
                                        className="form-control"
                                        onChange={(e) => setData('apellido', e.target.value)}
                                    />
                                    {errors.apellido && <div className="text-danger mt-1">{errors.apellido}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="foto" className="form-label">Foto</label>
                                    <input
                                        id="foto"
                                        type="file"
                                        name="foto"
                                        className="form-control"
                                        onChange={(e) => setData('foto', e.target.files[0])}
                                    />
                                    {errors.foto && <div className="text-danger mt-1">{errors.foto}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <input
                                        id="pais"
                                        type="text"
                                        name="pais"
                                        value={data.pais}
                                        className="form-control"
                                        onChange={(e) => setData('pais', e.target.value)}
                                    />
                                    {errors.pais && <div className="text-danger mt-1">{errors.pais}</div>}
                                </div>

                                {/* Condición Tributaria */}
                                <h4 className="mt-4 mb-3">Condición Tributaria</h4>

                                <div className="col-md-6">
                                    <label htmlFor="identidadPersonal" className="form-label">Identidad Personal</label>
                                    <input
                                        id="identidadPersonal"
                                        type="text"
                                        name="identidadPersonal"
                                        value={data.identidadPersonal}
                                        className="form-control"
                                        onChange={(e) => setData('identidadPersonal', e.target.value)}
                                    />
                                    {errors.identidadPersonal && <div className="text-danger mt-1">{errors.identidadPersonal}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="identidadTributaria" className="form-label">Identidad Tributaria</label>
                                    <input
                                        id="identidadTributaria"
                                        type="text"
                                        name="identidadTributaria"
                                        value={data.identidadTributaria}
                                        className="form-control"
                                        onChange={(e) => setData('identidadTributaria', e.target.value)}
                                    />
                                    {errors.identidadTributaria && <div className="text-danger mt-1">{errors.identidadTributaria}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="codigoAccesoRapido" className="form-label">Código de Acceso Rápido</label>
                                    <input
                                        id="codigoAccesoRapido"
                                        type="text"
                                        name="codigoAccesoRapido"
                                        value={data.codigoAccesoRapido}
                                        className="form-control"
                                        onChange={(e) => setData('codigoAccesoRapido', e.target.value)}
                                    />
                                    {errors.codigoAccesoRapido && <div className="text-danger mt-1">{errors.codigoAccesoRapido}</div>}
                                </div>

                                {/* Domicilio */}
                                <h4 className="mt-4 mb-3">Domicilio</h4>

                                <div className="col-md-6">
                                    <label htmlFor="domicilio" className="form-label">Domicilio</label>
                                    <input
                                        id="domicilio"
                                        type="text"
                                        name="domicilio"
                                        value={data.domicilio}
                                        className="form-control"
                                        onChange={(e) => setData('domicilio', e.target.value)}
                                    />
                                    {errors.domicilio && <div className="text-danger mt-1">{errors.domicilio}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="provincia" className="form-label">Provincia</label>
                                    <input
                                        id="provincia"
                                        type="text"
                                        name="provincia"
                                        value={data.provincia}
                                        className="form-control"
                                        onChange={(e) => setData('provincia', e.target.value)}
                                    />
                                    {errors.provincia && <div className="text-danger mt-1">{errors.provincia}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
                                    <input
                                        id="codigoPostal"
                                        type="text"
                                        name="codigoPostal"
                                        value={data.codigoPostal}
                                        className="form-control"
                                        onChange={(e) => setData('codigoPostal', e.target.value)}
                                    />
                                    {errors.codigoPostal && <div className="text-danger mt-1">{errors.codigoPostal}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="telefonoFijo" className="form-label">Teléfono Fijo</label>
                                    <input
                                        id="telefonoFijo"
                                        type="text"
                                        name="telefonoFijo"
                                        value={data.telefonoFijo}
                                        className="form-control"
                                        onChange={(e) => setData('telefonoFijo', e.target.value)}
                                    />
                                    {errors.telefonoFijo && <div className="text-danger mt-1">{errors.telefonoFijo}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="telefonoMovil" className="form-label">Teléfono Móvil</label>
                                    <input
                                        id="telefonoMovil"
                                        type="text"
                                        name="telefonoMovil"
                                        value={data.telefonoMovil}
                                        className="form-control"
                                        onChange={(e) => setData('telefonoMovil', e.target.value)}
                                    />
                                    {errors.telefonoMovil && <div className="text-danger mt-1">{errors.telefonoMovil}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                                </div>

                                {/* Observación */}
                                <div className="col-md-12">
                                    <label htmlFor="observacion" className="form-label"><h4>Observación</h4></label>
                                    <textarea
                                        id="observacion"
                                        name="observacion"
                                        value={data.observacion}
                                        className="form-control"
                                        onChange={(e) => setData('observacion', e.target.value)}
                                    />
                                    {errors.observacion && <div className="text-danger mt-1">{errors.observacion}</div>}
                                </div>

                                {/* Botones */}
                                <div className="col-12 d-flex justify-content-between mt-4">
                                    <button type="submit" className="btn btn-success">Guardar</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => reset()}>Limpiar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateContact;
