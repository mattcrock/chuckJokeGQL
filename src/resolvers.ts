export default {
  Query: {
    hello(obj: any, { subject }: { subject: string }) {
      return `Hello, ${subject}! from Server`;
    },
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
