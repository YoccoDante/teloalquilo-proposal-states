export type UserModel = {
    full_name:string,
    rate:number,
    profile_pic:string,
    state:'con vivienda'|'sin vivienda'|'buscando vivienda'|'me mudaré pronto'
}

export enum States {
    CON_VIVIENDA = 'con vivienda',
    SIN_VIVIENDA = 'sin vivienda',
    BUSCANDO_VIVIENDA = 'buscando vivienda',
    ME_MUDARE_PRONTO = 'me mudaré pronto',
}