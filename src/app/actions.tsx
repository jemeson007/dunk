'use server'

export async function p(formData: FormData){
    const plr: string[] = [];
    const plr0: string[] = [];

    const pp = formData.get('pp') as string
    const feat = formData.get('feat') as string

    plr.push(pp)
    plr0.push(feat)
    
}