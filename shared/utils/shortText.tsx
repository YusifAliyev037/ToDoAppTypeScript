export const shortText = (text:string, len:number) :string | undefined =>{
    if(text && text.length > len){
        return `${text.slice(0, len)}...`
    }
}