import {getData} from "../network/data";

export const data = {
  data(){
    return {
      blog: [],
      type: [],
      tag: [],
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      getData().then(res => {
        // console.log(res);
        this.blog = res.blog;
        this.type = res.type;
        this.tag = res.tag;
      })
    }
  }
};
