(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{194:function(_,v,t){"use strict";t.r(v);var i=t(0),a=Object(i.a)({},(function(){var _=this.$createElement;this._self._c;return this._m(0)}),[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"四、动态规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、动态规划"}},[_._v("#")]),_._v(" 四、动态规划")]),_._v(" "),t("h2",{attrs:{id:"基础部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础部分"}},[_._v("#")]),_._v(" 基础部分")]),_._v(" "),t("p",[t("strong",[_._v("概念")])]),_._v(" "),t("p",[_._v("每次决策依赖当前状态，又随即引起状态的转移。一个决策序列就是在变化的状态中产生出来的，所以，这种多阶段最优化决策问题的过程就称为动态规划。")]),_._v(" "),t("p",[t("strong",[_._v("思想策略")])]),_._v(" "),t("p",[_._v("将待求解的问题分解为若干个子问题（阶段），按顺序求解子阶段，前一子问题的解，为后一子问题的求解提供了有用的信息。在求解任一子问题时，列出各种可能的局部解，通过决策保留哪些有可能达到最优的局部解，丢弃其他局部解。依次解决各子问题，最后一个子问题就是初始问题的解。")]),_._v(" "),t("p",[t("strong",[_._v("特征")])]),_._v(" "),t("p",[_._v("能采用动态规划的问题一般要具有 3 个性质：")]),_._v(" "),t("ul",[t("li",[_._v("1.最优化原理：如果问题的最优解所包含的子问题的解也是最优的，就称该问题具有最优子结构，即满足最优化原理")]),_._v(" "),t("li",[_._v("2.无后效性：即某阶段状态一旦确定，就不受这个状态以后决策的影响。也就是说，某状态以后的过程不会影响以前的状态，只与当前状态有关。")]),_._v(" "),t("li",[_._v("3.有重叠子问题：即子问题之间是不独立的，一个子问题在下一阶段决策中可能被多次使用到。（该性质并不是动态规划适用的必要条件，但是如果没有这条件，动态规划算法同其他算法相比就不具备优势）")])]),_._v(" "),t("p",[t("strong",[_._v("基本步骤")])]),_._v(" "),t("ul",[t("li",[_._v("1.分析最优解的性质，并刻画其结构特征")]),_._v(" "),t("li",[_._v("2.递归的定义最优解")]),_._v(" "),t("li",[_._v("3.以自底向上或自顶向下的记忆化方式（备忘录法）计算出最优值")]),_._v(" "),t("li",[_._v("4.根据计算最优值时得到的信息，过重问题的最优解")])]),_._v(" "),t("p",[t("strong",[_._v("适用动态规划求解的经典问题")])]),_._v(" "),t("ul",[t("li",[_._v("矩阵连乘")]),_._v(" "),t("li",[_._v("走金字塔")]),_._v(" "),t("li",[_._v("最长公共子序列")]),_._v(" "),t("li",[_._v("最长递增子序列")]),_._v(" "),t("li",[_._v("凸多边形最优三角部分")]),_._v(" "),t("li",[_._v("背包问题")]),_._v(" "),t("li",[_._v("双调欧几里得旅行商问题")])]),_._v(" "),t("p",[t("strong",[_._v("分治与动态规划")]),_._v("\n共同点：二者都要求原问题具有最优子结构性质，都是将原问题分而治之，分解成若干个规模较小（小到很容易解决的程序）的子问题，然后将子问题的解合并，形成原问题的解。")]),_._v(" "),t("p",[_._v("不同点：分治法将分解后的子问题看成相互独立的，通过用递归来做。动态规划将分解后的子问题理解为相互间有联系，有重叠部分，需要记忆，通常用来迭代来做。")]),_._v(" "),t("p",[t("strong",[_._v("步骤")]),_._v("\n描述最优解的结构")]),_._v(" "),t("p",[_._v("递归定义最优解的值")]),_._v(" "),t("p",[_._v("按自底向上的方式计算最优解的值")]),_._v(" "),t("p",[_._v("由计算出的结果构造一个最优解")]),_._v(" "),t("h2",{attrs:{id:"题目部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目部分"}},[_._v("#")]),_._v(" 题目部分")]),_._v(" "),t("blockquote",[t("p",[_._v("1.背包问题")])]),_._v(" "),t("p",[_._v("有 N 件物品和一个容量为 V 的背包。第 i 件物品的费用是 c[i]，价值是 w[i]。求解将哪些物品装入背包可使这些物品的费用总和不超过背包容量，且价值总和最大。")]),_._v(" "),t("blockquote",[t("p",[_._v("问题定义：")])]),_._v(" "),t("p",[_._v("给定 K 个整数的序列{ N1, N2, …, Nk }，其任意连续子序列可表示为{ Ni, Ni+1, …, Nj }，其中 1 <= i <= j <= K。最大连续子序列是所有连续子序列中元素和最大的一个， 例如给定序列{ -2, 11, -4, 13, -5, -2 }，其最大连续子序列为{ 11, -4, 13 }，最大和为 20")]),_._v(" "),t("p",[t("strong",[_._v("引理 1：")])]),_._v(" "),t("p",[_._v("以负数开头的子序列不会是最大子序列")]),_._v(" "),t("p",[_._v("证明: 令子序列为{ai,...,aj},其中开头的元素 ai<0,则 ai+...aj < ai+1+...+aj 显然成立")]),_._v(" "),t("p",[t("strong",[_._v("引理 2：")])])])}],!1,null,null,null);v.default=a.exports}}]);