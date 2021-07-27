//función pura para ordenar
export const ordenar = (a,b)=>{
  const titleA= a.title.toLowerCase();//castillo
  const titleB= b.title.toLowerCase();//album
  if(titleA < titleB){
    return -1;
  }
  if(titleA > titleB){
      return 1;
  }
  return 0;
};
