
export const removeFeature = item => {

    return {type: 'remove', item: item}

};

export const buyItem = item => {

    return {type: 'add', item: item};
  };