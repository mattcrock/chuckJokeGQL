// resolver definition, making use of the custom data source
export default {
  Query: {
    randomJoke: async (parent: any,args :any, { dataSources }:any) => {
      return dataSources.chuckNorrisAPI.getRandomJoke();
    },
    categories: async (parent: any, args :any, { dataSources }:any) => {
      return dataSources.chuckNorrisAPI.getCategories();
    },
    jokeByCategory: async (parent: any, {category}: {category:String}, { dataSources }:any) => {
      return dataSources.chuckNorrisAPI.getJokeByCategory(category);
    },
  }
};
