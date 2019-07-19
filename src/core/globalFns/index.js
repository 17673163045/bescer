class GlobalFns {
  //处理图片url的函数,根据货号拼接图片url地址,传入一个数组,数组属性值为CakeList,CakeList是一个数组,显示到首页和分类页
  getImgUrl(sailList) {
    var baseUrl = "https://res.bestcake.com/m-images/ww/";
    sailList.forEach(el => {
      var CakeList = JSON.parse(el.CakeList);
      CakeList.forEach(item => {
        if (item.SupplyNo.indexOf("RP") != -1) {
          item.ImgUrl = `${baseUrl}rp/${item.Name}.jpg`;
        } else if (item.SupplyNo.indexOf("JZ") != -1) {
          item.ImgUrl = `${baseUrl}jz/${item.Name}.png`;
        } else if (item.SupplyNo.indexOf("NS") != -1) {
          item.ImgUrl = `${baseUrl}ns/${item.Name}.jpg`;
        } else if (item.SupplyNo.indexOf("KSK") != -1) {
          item.ImgUrl = `${baseUrl}jd/${item.Name}.png`;
        }
      });
      el.CakeList = CakeList;
    });
    return sailList;
  }


  //处理图片url的函数,根据货号拼接图片url地址,传入直接的一个个商品数组对象,显示到首页和分类页
  getImgUrl2(CakeList) {
    var baseUrl = "https://res.bestcake.com/m-images/ww/";
    if (typeof CakeList == "string") {
      CakeList = JSON.parse(CakeList);
    }
    CakeList.forEach(item => {
      if (item.SupplyNo.indexOf("RP") != -1) {
        item.ImgUrl = `${baseUrl}rp/${item.Name}.jpg`;
      } else if (item.SupplyNo.indexOf("JZ") != -1) {
        item.ImgUrl = `${baseUrl}jz/${item.Name}.png`;
      } else if (item.SupplyNo.indexOf("NS") != -1) {
        item.ImgUrl = `${baseUrl}ns/${item.Name}.jpg`;
      } else if (item.SupplyNo.indexOf("KSK") != -1) {
        item.ImgUrl = `${baseUrl}jd/${item.Name}.png`;
      }
    });
    return CakeList;
  }


  //传入路由对象携带的query,根据query的货号属性,来拼接url地址,显示详情页图片
  getImgByQuery(query) {
    let baseUrl = "https://res.bestcake.com/m-images/";
    let ImgUrl = "";
    let imgUrlList = [];
    //经典系列蛋糕的图片路径
    if (query.SupplyNo.indexOf("KSK") != -1) {
      ImgUrl = `${baseUrl}jd-detail/${query.Name}/${query.Name}-`;
      for (let i = 1; i < 5; i++) {
        imgUrlList.push(ImgUrl + i + ".jpg");
      }
      return imgUrlList;
    }
    //女神系列蛋糕的图片路径
    else if (query.SupplyNo.indexOf("NS") != -1) {
      ImgUrl = `${baseUrl}ns-detail/${query.Name}/${query.Name}-`;
      for (let i = 1; i < 5; i++) {
        imgUrlList.push(ImgUrl + i + ".jpg");
      }
      return imgUrlList;
    }
    //伴手礼系列蛋糕的图片路径
    else if (query.SupplyNo.indexOf("JZ") != -1) {
      ImgUrl = `${baseUrl}jz-detail/${query.Name}/${query.Name}-`;
      for (let i = 1; i < 5; i++) {
        imgUrlList.push(ImgUrl + i + ".jpg");
      }
      return imgUrlList;
    }
    //乳品系列的图片路径
    else if (query.SupplyNo.indexOf("RP") != -1) {
      ImgUrl = `${baseUrl}rp-detail/${query.Name}/${query.Name}-`;
      for (let i = 1; i < 5; i++) {
        imgUrlList.push(ImgUrl + i + ".jpg");
      }
      return imgUrlList;
    }
  }

//在详情页根据路由的query参数来调用接口


  //pathto函数,通过路由跳转到详情页,传入query携带参数跳转.
  topath(item) {
    this.$router.push({
      path: "/detail",
      query: item
    });
  }
}
export default new GlobalFns()
