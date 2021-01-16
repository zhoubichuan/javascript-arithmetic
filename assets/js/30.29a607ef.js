(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{195:function(_,v,t){"use strict";t.r(v);var l=t(0),i=Object(l.a)({},(function(){var _=this.$createElement;this._self._c;return this._m(0)}),[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"五、分治算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、分治算法"}},[_._v("#")]),_._v(" 五、分治算法")]),_._v(" "),t("p",[t("strong",[_._v("概念")])]),_._v(" "),t("p",[_._v("将一个难以直接解决的大问题，分割成一个规模较小的相同问题，以便各个击破，分而治之。")]),_._v(" "),t("p",[t("strong",[_._v("思想策略")])]),_._v(" "),t("p",[_._v("对于一个规模为 n 的问题，若该问题可以容易的解决（比如说规模 n 较小）则直接解决，否则将其分解为 k 个规模较小的子问题，这些子问题互相独立且与原问题形式相同，递归地解决这些子问题，然后将各子问题的解合并得到原问题的解。")]),_._v(" "),t("p",[t("strong",[_._v("特征")])]),_._v(" "),t("ul",[t("li",[_._v("1.该问题的规模缩小到一定的程度就可以容易地解决")]),_._v(" "),t("li",[_._v("2.该问题可以分解为若干个规模较小的相同问题，即该问题具有最优子结构性质")]),_._v(" "),t("li",[_._v("3.利用该问题分解出的子问题的解可以合并为该问题的解")]),_._v(" "),t("li",[_._v("4.利用该问题所分解出的各个子问题是相互独立的，即子问题之间不包含公共的子子问题")])]),_._v(" "),t("p",[_._v("第一条特征是绝大多数问题都可以满足的，因为问题的计算复杂性一般是随着问题规模的增加而增加")]),_._v(" "),t("p",[_._v("第二条特性是应用分治法的前提它也是大多数问题可以满足的，此特性反映了递归思想的应用")]),_._v(" "),t("p",[_._v("第三条特性是关键，能否利用分治法完全取决于问题是否具有第三条特征，如果具备了第一条和第二条特征，而不具备第三条特征，则可以考虑用贪心法或动态规划法。")]),_._v(" "),t("p",[_._v("第四条特征涉及到分治法的效率，如果各子问题是不独立的则分治法要做许多不必要的工作，重复地解公共的子问题，此时虽然可用分治法，但一般用动态规划法较好。")]),_._v(" "),t("p",[t("strong",[_._v("基本步骤")])]),_._v(" "),t("ul",[t("li",[_._v("1.分解：将原问题分解为若干个规模较小，相互独立，与原问题形式相同的子问题")]),_._v(" "),t("li",[_._v("2.解决：若子问题规模较小而容易被解决则直接解，否则递归地解各个子问题")]),_._v(" "),t("li",[_._v("3.合并：将各个子问题的解合并为原问题的解")])]),_._v(" "),t("p",[t("strong",[_._v("适用分治法求解的经典问题")])]),_._v(" "),t("ul",[t("li",[_._v("1.二分搜索")]),_._v(" "),t("li",[_._v("2.大整数乘法")]),_._v(" "),t("li",[_._v("3.Strassen 矩阵乘法")]),_._v(" "),t("li",[_._v("4.棋盘覆盖")]),_._v(" "),t("li",[_._v("5.合并排序")]),_._v(" "),t("li",[_._v("6.快速排序")]),_._v(" "),t("li",[_._v("7.线性时间排序")]),_._v(" "),t("li",[_._v("8.最接近点对问题")]),_._v(" "),t("li",[_._v("9.循环赛日程表")]),_._v(" "),t("li",[_._v("10.汉诺塔")])])])}],!1,null,null,null);v.default=i.exports}}]);