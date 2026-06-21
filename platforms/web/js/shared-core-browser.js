/* Auto-generated browser bundle from shared core.
 * Source modules remain canonical under /shared.
 * This file lets platforms/web/index.html run directly from file://.
 */
(function (global) {
  'use strict';

  const modules = {};
  function define(key, factory) {
    const module = { exports: {} };
    const localRequire = name => modules[name];
    factory(module, module.exports, localRequire);
    modules[key] = module.exports;
  }

  define("./yaoData", function (module, exports, require) {
    /**
     * 《周易》六十四卦爻辞与《象传》大象、小象。
     * 共386条：384爻 + 乾用九 + 坤用六。
     * 来源：https://zh.wikisource.org/wiki/%E5%91%A8%E6%98%93
     */
    const YAO_DATA = [
      {
        "id": 1,
        "name": "乾卦",
        "daXiang": "天行健，君子以自強不息。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "潛龍勿用。",
            "xiang": "潛龍勿用，陽在下也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "見龍在田，利見大人。",
            "xiang": "見龍在田，德施普也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "君子終日乾乾，夕惕若；厲，无咎。",
            "xiang": "終日乾乾，反復道也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "或躍在淵，无咎。",
            "xiang": "或躍在淵，進无咎也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "飛龍在天，利見大人。",
            "xiang": "飛龍在天，大人造也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "亢龍，有悔。",
            "xiang": "亢龍有悔，盈不可久也。"
          },
          {
            "position": 7,
            "title": "用九",
            "original": "見羣龍无首，吉。",
            "xiang": "用九，天德不可為首也。"
          }
        ]
      },
      {
        "id": 2,
        "name": "坤卦",
        "daXiang": "地勢坤，君子以厚德載物。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "履霜，堅冰至。",
            "xiang": "履霜堅冰，陰始凝也。馴致其道，至堅冰也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "直方大，不習无不利。",
            "xiang": "六二之動，直以方也。不習无不利，地道光也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "含章，可貞。或從王事，无成有終。",
            "xiang": "含章可貞，以時發也。或從王事，知光大也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "括囊，无咎无譽。",
            "xiang": "括囊无咎，慎不害也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "黃裳，元吉。",
            "xiang": "黃裳元吉，文在中也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "龍戰于野，其血玄黃。",
            "xiang": "龍戰于野，其道窮也。"
          },
          {
            "position": 7,
            "title": "用六",
            "original": "利永貞。",
            "xiang": "用六永貞，以大終也。"
          }
        ]
      },
      {
        "id": 3,
        "name": "屯卦",
        "daXiang": "雲雷，屯；君子以經綸。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "磐桓，利居貞，利建侯。",
            "xiang": "雖磐桓，志行正也。以貴下賤，大得民也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "屯如邅如，乘馬班如，匪寇婚媾，女子貞不字，十年乃字。",
            "xiang": "六二之難，乘剛也。十年乃字，反常也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "即鹿无虞，惟入于林中，君子幾不如舍，往吝。",
            "xiang": "即鹿无虞，以從禽也。君子舍之，往吝窮也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "乘馬班如，求婚媾，往，吉无不利。",
            "xiang": "求而往，明也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "屯其膏；小貞吉，大貞凶。",
            "xiang": "屯其膏，施未光也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "乘馬班如，泣血漣如。",
            "xiang": "泣血漣如，何可長也。"
          }
        ]
      },
      {
        "id": 4,
        "name": "蒙卦",
        "daXiang": "山下出泉，蒙；君子以果行育德。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "發蒙，利用刑人，用說桎梏，以往吝。",
            "xiang": "利用刑人，以正法也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "包蒙吉，納婦吉，子克家。",
            "xiang": "子克家，剛柔接也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "勿用取女，見金夫，不有躬，无攸利。",
            "xiang": "勿用取女，行不順也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "困蒙，吝。",
            "xiang": "困蒙之吝，獨遠實也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "童蒙，吉。",
            "xiang": "童蒙之吉，順以巽也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "擊蒙，不利為寇，利禦寇。",
            "xiang": "利禦寇，上下順也。"
          }
        ]
      },
      {
        "id": 5,
        "name": "需卦",
        "daXiang": "雲上於天，需；君子以飲食宴樂。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "需于郊，利用恆，无咎。",
            "xiang": "需于郊，不犯難行也。利用恆，无咎，未失常也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "需于沙，小有言，終吉。",
            "xiang": "需于沙，衍在中也。雖小有言，以終吉也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "需于泥，致寇至。",
            "xiang": "需于泥，災在外也。自我致寇，敬慎不敗也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "需于血，出自穴。",
            "xiang": "需于血，順以聽也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "需于酒食，貞吉。",
            "xiang": "酒食，貞吉，以中正也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "入于穴，有不速之客三人來，敬之終吉。",
            "xiang": "不速之客來，敬之終吉。雖不當位，未大失也。"
          }
        ]
      },
      {
        "id": 6,
        "name": "讼卦",
        "daXiang": "天與水違行，訟；君子以作事謀始。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "不永所事，小有言，終吉。",
            "xiang": "不永所事，訟不可長也。雖小有言，其辯明也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "不克訟，歸而逋，其邑人三百戶无眚。",
            "xiang": "不克訟，歸逋竄也。自下訟上，患至掇也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "食舊德，貞厲，終吉。或從王事，无成。",
            "xiang": "食舊德，從上吉也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "不克訟，復即命渝，安貞吉。",
            "xiang": "復即命渝，安貞，不失也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "訟，元吉。",
            "xiang": "訟，元吉，以中正也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "或錫之鞶帶，終朝三褫之。",
            "xiang": "以訟受服，亦不足敬也。"
          }
        ]
      },
      {
        "id": 7,
        "name": "师卦",
        "daXiang": "地中有水，師；君子以容民畜衆。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "師出以律，否臧，凶。",
            "xiang": "師出以律；失律，凶也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "在師中吉，无咎；王三錫命。",
            "xiang": "在師中吉，承天寵也。王三錫命，懷萬邦也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "師或輿尸，凶。",
            "xiang": "師或輿尸，大无功也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "師左次，无咎。",
            "xiang": "左次无咎，未失常也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "田有禽，利執言，无咎。長子帥師，弟子輿尸，貞凶。",
            "xiang": "長子帥師，以中行也。弟子輿尸，使不當也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "大君有命，開國承家，小人勿用。",
            "xiang": "大君有命，以正功也。小人勿用，必亂邦也。"
          }
        ]
      },
      {
        "id": 8,
        "name": "比卦",
        "daXiang": "地上有水，比；先王以建萬國，親諸侯。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "有孚，比之，无咎。有孚盈缶，終來有它，吉。",
            "xiang": "比之初六，有它吉也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "比之自內，貞吉。",
            "xiang": "比之自內，不自失也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "比之匪人。",
            "xiang": "比之匪人，不亦傷乎！"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "外比之，貞吉。",
            "xiang": "外比於賢，以從上也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "顯比。王用三驅，失前禽，邑人不誡，吉。",
            "xiang": "顯比之吉，位正中也。舍逆取順，失前禽也。邑人不誡，上使中也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "比之无首，凶。",
            "xiang": "比之无首，无所終也。"
          }
        ]
      },
      {
        "id": 9,
        "name": "小畜卦",
        "daXiang": "風行天上，小畜，君子以懿文德。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "復自道，何其咎，吉。",
            "xiang": "復自道，其義吉也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "牽復，吉。",
            "xiang": "牽復在中，亦不自失也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "輿說輻，夫妻反目。",
            "xiang": "夫妻反目，不能正室也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "有孚，血去惕出，无咎。",
            "xiang": "有孚。惕出。上合志也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "有孚攣如，富以其鄰。",
            "xiang": "有孚攣如，不獨富也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "既雨既處，尚德載，婦貞厲，月幾望，君子征凶。",
            "xiang": "既雨既處，德積載也。君子征凶，有所疑也。"
          }
        ]
      },
      {
        "id": 10,
        "name": "履卦",
        "daXiang": "上天下澤，履；君子以辨上下，定民志。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "素履，往无咎。",
            "xiang": "素履之往，獨行願也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "履道坦坦，幽人貞吉。",
            "xiang": "幽人貞吉，中不自亂也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "眇能視，跛能履，履虎尾，咥人，凶。武人為于大君。",
            "xiang": "眇能視，不足以有明也。跛能履，不足以與行也。咥人之凶，位不當也。武人為于大君，志剛也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "履虎尾，愬愬終吉。",
            "xiang": "愬愬終吉，志行也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "夬履，貞厲。",
            "xiang": "夬履貞厲，位正當也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "視履考祥，其旋元吉。",
            "xiang": "元吉在上，大有慶也。"
          }
        ]
      },
      {
        "id": 11,
        "name": "泰卦",
        "daXiang": "天地交，泰；后以財成天地之道，輔相天地之宜，以左右民。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "拔茅茹以其彙，征吉。",
            "xiang": "拔茅征吉，志在外也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "包荒。用馮河，不遐遺；朋亡。得尚于中行。",
            "xiang": "包荒，得尚于中行，以光大也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "无平不陂，无往不復，艱貞无咎。勿恤其孚，于食有福。",
            "xiang": "无往不復，天地際也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "翩翩，不富以其鄰；不戒以孚。",
            "xiang": "翩翩不富，皆失實也。不戒以孚，中心願也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "帝乙歸妹，以祉，元吉。",
            "xiang": "以祉，元吉。中以行願也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "城復于隍，勿用師，自邑告命，貞吝。",
            "xiang": "城復于隍，其命亂也。"
          }
        ]
      },
      {
        "id": 12,
        "name": "否卦",
        "daXiang": "天地不交，否；君子以儉德辟難，不可榮以祿。",
        "lines": [
          {
            "position": 1,
            "title": "初六，拔茅茹以其彙，貞吉。亨",
            "original": "初六，拔茅茹以其彙，貞吉。亨。",
            "xiang": "拔茅貞吉，志在君也。"
          },
          {
            "position": 2,
            "title": "六二，包承，小人吉，大人否。亨",
            "original": "六二，包承，小人吉，大人否。亨。",
            "xiang": "大人否，亨。不亂羣也。"
          },
          {
            "position": 3,
            "title": "六三，包羞",
            "original": "六三，包羞。",
            "xiang": "包羞，位不當也。"
          },
          {
            "position": 4,
            "title": "九四，有命，无咎，疇離祉",
            "original": "九四，有命，无咎，疇離祉。",
            "xiang": "有命无咎，志行也。"
          },
          {
            "position": 5,
            "title": "九五，休否，大人吉。其亡其亡，繫于苞桑",
            "original": "九五，休否，大人吉。其亡其亡，繫于苞桑。",
            "xiang": "大人之吉，位正當也。"
          },
          {
            "position": 6,
            "title": "上九，傾否，先否後喜",
            "original": "上九，傾否，先否後喜。",
            "xiang": "否終則傾，何可長也。"
          }
        ]
      },
      {
        "id": 13,
        "name": "同人卦",
        "daXiang": "天與火，同人；君子以類族辨物。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "同人于門，無咎。",
            "xiang": "出門同人，又誰咎也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "同人于宗，吝。",
            "xiang": "同人于宗，吝道也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "伏戎于莽，升其高陵，三歲不興。",
            "xiang": "伏戎于莽，敵剛也。三歲不興，安行也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "乘其墉，弗克，攻吉。",
            "xiang": "乘其墉，義弗克也，其吉，則困而反則也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "同人，先號啕而后笑。大師克相遇。",
            "xiang": "同人之先，以中直也。大師相遇，言相克也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "同人于郊，無悔。",
            "xiang": "同人于郊，志未得也。"
          }
        ]
      },
      {
        "id": 14,
        "name": "大有卦",
        "daXiang": "火在天上，大有；君子以遏惡揚善，順天休命。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "无交害，匪咎，艱則无咎。",
            "xiang": "大有初九，无交害也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "大車以載，有攸往，无咎。",
            "xiang": "大車以載，積中不敗也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "公用亨于天子，小人弗克。",
            "xiang": "公用亨于天子，小人害也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "匪其彭，无咎。",
            "xiang": "匪其彭，无咎；明辨晰也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "厥孚交如，威如；吉。",
            "xiang": "厥孚交如，信以發志也。威如之吉，易而无備也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "自天佑之，吉无不利。",
            "xiang": "大有上吉，自天佑也。"
          }
        ]
      },
      {
        "id": 15,
        "name": "谦卦",
        "daXiang": "地中有山，謙；君子以裒多益寡，稱物平施。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "謙謙君子，用涉大川，吉。",
            "xiang": "謙謙君子，卑以自牧也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "鳴謙，貞吉。",
            "xiang": "鳴謙貞吉，中心得也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "勞謙君子，有終吉。",
            "xiang": "勞謙君子，萬民服也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "无不利，撝謙。",
            "xiang": "无不利撝謙；不違則也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "不富，以其鄰，利用侵伐，无不利。",
            "xiang": "利用侵伐，征不服也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "鳴謙，利用行師，征邑國。",
            "xiang": "鳴謙，志未得也。可用行師，征邑國也。"
          }
        ]
      },
      {
        "id": 16,
        "name": "豫卦",
        "daXiang": "雷出地奮，豫。先王以作樂崇德，殷薦之上帝，以配祖考。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "鳴豫，凶。",
            "xiang": "初六鳴豫，志窮凶也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "介于石，不終日，貞吉。",
            "xiang": "不終日，貞吉；以中正也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "盱豫，悔。遲有悔。",
            "xiang": "盱豫有悔，位不當也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "由豫，大有得。勿疑。朋盍簪。",
            "xiang": "由豫，大有得；志大行也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "貞疾，恆不死。",
            "xiang": "六五貞疾，乘剛也。恆不死，中未亡也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "冥豫，成有渝，无咎。",
            "xiang": "冥豫在上，何可長也。"
          }
        ]
      },
      {
        "id": 17,
        "name": "随卦",
        "daXiang": "澤中有雷，隨；君子以嚮晦入宴息。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "官有渝，貞吉。出門交有功。",
            "xiang": "官有渝，從正吉也。出門交有功，不失也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "系小子，失丈夫。",
            "xiang": "系小子，弗兼與也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "系丈夫，失小子。隨，有求得利，居貞。",
            "xiang": "系丈夫，志舍下也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "隨有獲，貞凶。有孚在道，以明，何咎。",
            "xiang": "隨有獲，其義凶也。有孚在道，明功也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "孚于嘉，吉。",
            "xiang": "孚于嘉，吉；位正中也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "拘系之，乃從維之。王用亨于西山。",
            "xiang": "拘系之，上窮也。"
          }
        ]
      },
      {
        "id": 18,
        "name": "蛊卦",
        "daXiang": "山下有風，蠱；君子以振民育德。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "幹父之蠱，有子考，无咎，厲終吉。",
            "xiang": "幹父之蠱，意承考也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "幹母之蠱，不可貞。",
            "xiang": "幹母之蠱，得中道也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "幹父之蠱，小有悔，无大咎。",
            "xiang": "幹父之蠱，終无咎也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "裕父之蠱，往見吝。",
            "xiang": "裕父之蠱，往未得也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "幹父之蠱，用譽。",
            "xiang": "幹父用譽，承以德也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "不事王侯，高尚其事。",
            "xiang": "不事王侯，志可則也。"
          }
        ]
      },
      {
        "id": 19,
        "name": "临卦",
        "daXiang": "澤上有地，臨；君子以教思无窮，容保民无疆。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "咸臨，貞吉。",
            "xiang": "咸臨貞吉，志行正也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "咸臨，吉无不利。",
            "xiang": "咸臨，吉无不利；未順命也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "甘臨，无攸利。既憂之，无咎。",
            "xiang": "甘臨，位不當也。既憂之，咎不長也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "至臨，无咎。",
            "xiang": "至臨无咎，位當也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "知臨，大君之宜，吉。",
            "xiang": "大君之宜，行中之謂也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "敦臨，吉无咎。",
            "xiang": "敦臨之吉，志在內也。"
          }
        ]
      },
      {
        "id": 20,
        "name": "观卦",
        "daXiang": "風行地上，觀；先王以省方，觀民設教。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "童觀，小人无咎，君子吝。",
            "xiang": "初六童觀，小人道也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "窺觀，利女貞。",
            "xiang": "窺觀女貞，亦可丑也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "觀我生，進退。",
            "xiang": "觀我生，進退；未失道也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "觀國之光，利用賓于王。",
            "xiang": "觀國之光，尚賓也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "觀我生，君子无咎。",
            "xiang": "觀我生，觀民也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "觀其生，君子无咎。",
            "xiang": "觀其生，志未平也。"
          }
        ]
      },
      {
        "id": 21,
        "name": "噬嗑卦",
        "daXiang": "雷電噬嗑；先王以明罰敕法。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "屨校滅趾，无咎。",
            "xiang": "屨校滅趾，不行也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "噬膚滅鼻，无咎。",
            "xiang": "噬膚滅鼻，乘剛也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "噬臘肉，遇毒；小吝，无咎。",
            "xiang": "遇毒，位不當也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "噬乾胏，得金矢，利艱貞，吉。",
            "xiang": "利艱貞吉，未光也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "噬乾肉，得黃金，貞厲，无咎。",
            "xiang": "貞厲无咎，得當也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "何校滅耳，凶。",
            "xiang": "何校滅耳，聰不明也。"
          }
        ]
      },
      {
        "id": 22,
        "name": "贲卦",
        "daXiang": "山下有火，賁；君子以明庶政，无敢折獄。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "賁其趾，舍車而徒。",
            "xiang": "舍車而徒，義弗乘也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "賁其須。",
            "xiang": "賁其須，與上興也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "賁如濡如，永貞吉。",
            "xiang": "永貞之吉，終莫之陵也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "賁如皤如，白馬翰如，匪寇婚媾。",
            "xiang": "六四，當位疑也。匪寇婚媾，終无尤也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "賁於丘園，束帛戔戔，吝，終吉。",
            "xiang": "六五之吉，有喜也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "白賁，无咎。",
            "xiang": "白賁无咎，上得志也。"
          }
        ]
      },
      {
        "id": 23,
        "name": "剥卦",
        "daXiang": "山附地上，剝；上以厚下，安宅。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "剝牀以足，蔑貞凶。",
            "xiang": "剝牀以足，以滅下也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "剝牀以辨，蔑貞凶。",
            "xiang": "剝牀以辨，未有與也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "剝之，无咎。",
            "xiang": "剝之无咎，失上下也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "剝牀以膚，凶。",
            "xiang": "剝牀以膚，切近災也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "貫魚，以宮人寵，无不利。",
            "xiang": "以宮人寵，終无尤也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "碩果不食，君子得輿，小人剝廬。",
            "xiang": "君子得輿，民所載也。小人剝廬，終不可用也。"
          }
        ]
      },
      {
        "id": 24,
        "name": "复卦",
        "daXiang": "雷在地中，復；先王以至日閉關，商旅不行，后不省方。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "不復遠，无袛悔，元吉。",
            "xiang": "不遠之復，以修身也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "休復，吉。",
            "xiang": "休復之吉，以下仁也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "頻復，厲无咎。",
            "xiang": "頻復之厲，義无咎也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "中行獨復。",
            "xiang": "中行獨復，以從道也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "敦復，无悔。",
            "xiang": "敦復无悔，中以自考也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "迷復，凶，有災眚。用行師，終有大敗，以其國君，凶；至于十年，不克征。",
            "xiang": "迷復之凶，反君道也。"
          }
        ]
      },
      {
        "id": 25,
        "name": "无妄卦",
        "daXiang": "天下雷行，物與无妄；先王以茂對時，育萬物。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "无妄，往吉。",
            "xiang": "无妄之往，得志也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "不耕穫，不菑畬，則利有攸往。",
            "xiang": "不耕穫，未富也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "无妄之災，或系之牛，行人之得，邑人之災。",
            "xiang": "行人得牛，邑人災也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "可貞，无咎。",
            "xiang": "可貞无咎，固有之也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "无妄之疾，勿藥有喜。",
            "xiang": "无妄之藥，不可試也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "无妄，行有眚，无攸利。",
            "xiang": "无妄之行，窮之災也。"
          }
        ]
      },
      {
        "id": 26,
        "name": "大畜卦",
        "daXiang": "天在山中，大畜；君子以多識前言往行，以畜其德。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "有厲利已。",
            "xiang": "有厲利已，不犯災也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "輿說輹。",
            "xiang": "輿說輹，中无尤也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "良馬逐，利艱貞。曰閑輿衛，利有攸往。",
            "xiang": "利有攸往，上合志也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "童牛之牿，元吉。",
            "xiang": "六四元吉，有喜也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "豶豕之牙，吉。",
            "xiang": "六五之吉，有慶也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "何天之衢，亨。",
            "xiang": "何天之衢，道大行也。"
          }
        ]
      },
      {
        "id": 27,
        "name": "颐卦",
        "daXiang": "山下有雷，頤；君子以慎言語，節飲食。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "舍爾靈龜，觀我朵頤，凶。",
            "xiang": "觀我朵頤，亦不足貴也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "顛頤，拂經，于丘頤，征凶。",
            "xiang": "六二征凶，行失類也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "拂頤，貞凶，十年勿用，无攸利。",
            "xiang": "十年勿用，道大悖也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "顛頤吉，虎視眈眈，其欲逐逐，无咎。",
            "xiang": "顛頤之吉，上施光也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "拂經，居貞吉，不可涉大川。",
            "xiang": "居貞之吉，順以從上也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "由頤，厲吉，利涉大川。",
            "xiang": "由頤厲吉，大有慶也。"
          }
        ]
      },
      {
        "id": 28,
        "name": "大过卦",
        "daXiang": "澤滅木，大過。君子以獨立不懼，遯世无悶。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "藉用白茅，无咎。",
            "xiang": "藉用白茅，柔在下也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "枯楊生稊，老夫得其女妻，无不利。",
            "xiang": "老夫女妻，過以相與也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "棟橈，凶。",
            "xiang": "棟橈之凶，不可以有輔也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "棟隆，吉。有它吝。",
            "xiang": "棟隆之吉，不橈乎下也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "枯楊生華，老婦得其士夫，无咎无譽。",
            "xiang": "枯楊生華，何可久也。老婦士夫，亦可丑也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "過涉滅頂，凶，无咎。",
            "xiang": "過涉之凶，不可咎也。"
          }
        ]
      },
      {
        "id": 29,
        "name": "坎卦",
        "daXiang": "水洊至，習坎；君子以常德行，習教事。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "習坎，入于坎窞，凶。",
            "xiang": "習坎入坎，失道凶也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "坎有險，求小得。",
            "xiang": "求小得，未出中也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "來之坎坎，險且枕，入于坎窞，勿用。",
            "xiang": "來之坎坎，終无功也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "樽酒簋貳，用缶，納約自牖，終无咎。",
            "xiang": "樽酒簋貳，剛柔济也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "坎不盈，祗既平，无咎。",
            "xiang": "坎不盈，中未大也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "係用徽纆，寘于叢棘，三歲不得，凶。",
            "xiang": "上六失道，凶三歲也。"
          }
        ]
      },
      {
        "id": 30,
        "name": "离卦",
        "daXiang": "明兩作離，大人以繼明照于四方。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "履錯然，敬之无咎。",
            "xiang": "履錯之敬，以辟咎也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "黃離，元吉。",
            "xiang": "黃離元吉，得中道也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "日昃之離，不鼓缶而歌，則大耋之嗟，凶。",
            "xiang": "日昃之離，何可久也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "突如其來如，焚如，死如，棄如。",
            "xiang": "突如其來如，无所容也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "出涕沱若，戚嗟若，吉。",
            "xiang": "六五之吉，離王公也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "王用出征，有嘉折首，獲匪其醜，无咎。",
            "xiang": "王用出征，以正邦也。"
          }
        ]
      },
      {
        "id": 31,
        "name": "咸卦",
        "daXiang": "山上有澤，咸；君子以虛受人。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "咸其拇。",
            "xiang": "咸其拇，志在外也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "咸其腓，凶，居吉。",
            "xiang": "雖凶，居吉，順不害也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "咸其股，執其隨，往吝。",
            "xiang": "咸其股，亦不處也。志在隨人，所執下也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "貞吉悔亡，憧憧往來，朋從爾思。",
            "xiang": "貞吉悔亡，未感害也。憧憧往來，未光大也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "咸其脢，无悔。",
            "xiang": "咸其脢，志末也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "咸其輔，頰，舌。",
            "xiang": "咸其輔，頰，舌，滕口說也。"
          }
        ]
      },
      {
        "id": 32,
        "name": "恒卦",
        "daXiang": "雷風，恆；君子以立不易方。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "浚恆，貞凶，无攸利。",
            "xiang": "浚恆之凶，始求深也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "悔亡。",
            "xiang": "九二悔亡，能久中也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "不恆其德，或承之羞，貞吝。",
            "xiang": "不恆其德，无所容也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "田无禽。",
            "xiang": "久非其位，安得禽也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "恆其德，貞，婦人吉，夫子凶。",
            "xiang": "婦人貞吉，從一而終也。夫子制義，從婦凶也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "振恆，凶。",
            "xiang": "振恆在上，大无功也。"
          }
        ]
      },
      {
        "id": 33,
        "name": "遁卦",
        "daXiang": "天下有山，遯；君子以遠小人，不惡而嚴。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "遯尾，厲，勿用有攸往。",
            "xiang": "遯尾之厲，不往何災也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "執之用黃牛之革，莫之勝說。",
            "xiang": "執用黃牛，固志也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "系遯，有疾厲，畜臣妾吉。",
            "xiang": "系遯之厲，有疾憊也。畜臣妾吉，不可大事也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "好遯君子吉，小人否。",
            "xiang": "君子好遯，小人否也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "嘉遯，貞吉。",
            "xiang": "嘉遯貞吉，以正志也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "肥遯，无不利。",
            "xiang": "肥遯，无不利；无所疑也。"
          }
        ]
      },
      {
        "id": 34,
        "name": "大壮卦",
        "daXiang": "雷在天上，大壯；君子以非禮弗履。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "壯于趾，征凶，有孚。",
            "xiang": "壯于趾，其孚窮也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "貞吉。",
            "xiang": "九二貞吉，以中也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "小人用壯，君子用罔，貞厲。羝羊觸藩，羸其角。",
            "xiang": "小人用壯，君子罔也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "貞吉悔亡，藩決不羸，壯于大輿之輹。",
            "xiang": "藩決不羸，尚往也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "喪羊于易，无悔。",
            "xiang": "喪羊于易，位不當也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "羝羊觸藩，不能退，不能遂，无攸利，艱則吉。",
            "xiang": "不能退，不能遂，不詳也。艱則吉，咎不長也。"
          }
        ]
      },
      {
        "id": 35,
        "name": "晋卦",
        "daXiang": "明出地上，晉；君子以自昭明德。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "晉如，摧如，貞吉。罔孚，裕无咎。",
            "xiang": "晉如，摧如；獨行正也。裕无咎；未受命也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "晉如，愁如，貞吉。受茲介福，于其王母。",
            "xiang": "受茲介福，以中正也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "眾允，悔亡。",
            "xiang": "眾允之志，上行也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "晉如鼫鼠，貞厲。",
            "xiang": "鼫鼠貞厲，位不當也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "悔亡，失得勿恤，往吉无不利。",
            "xiang": "失得勿恤，往有慶也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "晉其角，維用伐邑，厲吉无咎，貞吝。",
            "xiang": "維用伐邑，道未光也。"
          }
        ]
      },
      {
        "id": 36,
        "name": "明夷卦",
        "daXiang": "明入地中，明夷；君子以蒞眾，用晦而明。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "明夷于飛，垂其翼。君子于行，三日不食，有攸往，主人有言。",
            "xiang": "君子于行，義不食也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "明夷，夷于左股，用拯馬壯，吉。",
            "xiang": "六二之吉，順以則也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "明夷于南狩，得其大首，不可疾貞。",
            "xiang": "南狩之志，乃大得也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "入于左腹，獲明夷之心，于出門庭。",
            "xiang": "入于左腹，獲心意也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "箕子之明夷，利貞。",
            "xiang": "箕子之貞，明不可息也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "不明晦，初登于天，后入于地。",
            "xiang": "初登于天，照四國也。后入于地，失則也。"
          }
        ]
      },
      {
        "id": 37,
        "name": "家人卦",
        "daXiang": "風自火出，家人；君子以言有物，而行有恆。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "閑有家，悔亡。",
            "xiang": "閑有家，志未變也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "无攸遂，在中饋，貞吉。",
            "xiang": "六二之吉，順以巽也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "家人嗃嗃，悔厲吉；婦子嘻嘻，終吝。",
            "xiang": "家人嗃嗃，未失也；婦子嘻嘻，失家節也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "富家，大吉。",
            "xiang": "富家大吉，順在位也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "王假有家，勿恤。吉。",
            "xiang": "王假有家，交相愛也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "有孚威如，終吉。",
            "xiang": "威如之吉，反身之謂也。"
          }
        ]
      },
      {
        "id": 38,
        "name": "睽卦",
        "daXiang": "上火下澤，睽；君子以同而異。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "悔亡，喪馬勿逐，自復；見惡人无咎。",
            "xiang": "見惡人，以辟咎也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "遇主于巷，无咎。",
            "xiang": "遇主于巷，未失道也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "見輿曳，其牛掣，其人天且劓，无初有終。",
            "xiang": "見輿曳，位不當也。无初有終，遇剛也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "睽孤，遇元夫，交孚，厲无咎。",
            "xiang": "交孚无咎，志行也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "悔亡，厥宗噬膚，往何咎。",
            "xiang": "厥宗噬膚，往有慶也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "睽孤，見豕負涂，載鬼一車，先張之弧，后說之弧，匪寇婚媾，往遇雨則吉。",
            "xiang": "遇雨之吉，群疑亡也。"
          }
        ]
      },
      {
        "id": 39,
        "name": "蹇卦",
        "daXiang": "山上有水，蹇；君子以反身修德。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "往蹇，來譽。",
            "xiang": "往蹇來譽，宜待也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "王臣蹇蹇，匪躬之故。",
            "xiang": "王臣蹇蹇，終无尤也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "往蹇來反。",
            "xiang": "往蹇來反，內喜之也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "往蹇來連。",
            "xiang": "往蹇來連，當位實也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "大蹇朋來。",
            "xiang": "大蹇朋來，以中節也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "往蹇來碩，吉；利見大人。",
            "xiang": "往蹇來碩，志在內也。利見大人，以從貴也。"
          }
        ]
      },
      {
        "id": 40,
        "name": "解卦",
        "daXiang": "雷雨作，解；君子以赦過宥罪。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "无咎。",
            "xiang": "剛柔之際，義无咎也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "田獲三狐，得黃矢，貞吉。",
            "xiang": "九二貞吉，得中道也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "負且乘，致寇至，貞吝。",
            "xiang": "負且乘，亦可丑也，自我致戎，又誰咎也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "解而拇，朋至斯孚。",
            "xiang": "解而拇，未當位也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "君子維有解，吉；有孚于小人。",
            "xiang": "君子有解，小人退也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "公用射隼，于高墉之上，獲之，无不利。",
            "xiang": "公用射隼，以解悖也。"
          }
        ]
      },
      {
        "id": 41,
        "name": "损卦",
        "daXiang": "山下有澤，損；君子以懲忿窒欲。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "已事遄往，无咎，酌損之。",
            "xiang": "已事遄往，尚合志也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "利貞，征凶，弗損益之。",
            "xiang": "九二利貞，中以為志也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "三人行，則損一人；一人行，則得其友。",
            "xiang": "一人行，三則疑也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "損其疾，使遄有喜，无咎。",
            "xiang": "損其疾，亦可喜也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "或益之，十朋之龜弗克違，元吉。",
            "xiang": "六五元吉，自上佑也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "弗損益之，无咎，貞吉，利有攸往，得臣无家。",
            "xiang": "弗損益之，大得志也。"
          }
        ]
      },
      {
        "id": 42,
        "name": "益卦",
        "daXiang": "風雷，益；君子以見善則遷，有過則改。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "利用為大作，元吉，无咎。",
            "xiang": "元吉无咎，下不厚事也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "或益之，十朋之龜弗克違，永貞吉。王用享于帝，吉。",
            "xiang": "或益之，自外來也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "益之用凶事，无咎。有孚中行，告公用圭。",
            "xiang": "益用凶事，固有之也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "中行，告公從。利用為依遷國。",
            "xiang": "告公從，以益志也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "有孚惠心，勿問元吉。有孚惠我德。",
            "xiang": "有孚惠心，勿問之矣。惠我德，大得志也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "莫益之，或擊之，立心勿恆，凶。",
            "xiang": "莫益之，偏辭也。或擊之，自外來也。"
          }
        ]
      },
      {
        "id": 43,
        "name": "夬卦",
        "daXiang": "澤上于天，夬；君子以施祿及下，居德則忌。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "壯于前趾，往不勝為咎。",
            "xiang": "不勝而往，咎也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "惕號，莫夜有戎，勿恤。",
            "xiang": "莫夜有戎，得中道也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "壯于頄，有凶。君子夬夬，獨行遇雨，若濡有慍，无咎。",
            "xiang": "君子夬夬，終无咎也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "臀无膚，其行次且。牽羊悔亡，聞言不信。",
            "xiang": "其行次且，位不當也。聞言不信，聰不明也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "莧陸夬夬，中行无咎。",
            "xiang": "中行无咎，中未光也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "无號，終有凶。",
            "xiang": "无號之凶，終不可長也。"
          }
        ]
      },
      {
        "id": 44,
        "name": "姤卦",
        "daXiang": "天下有風，姤；后以施命誥四方。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "系于金柅，貞吉，有攸往，見凶，羸豕孚踟躅。",
            "xiang": "系于金柅，柔道牽也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "包有魚，无咎，不利賓。",
            "xiang": "包有魚，義不及賓也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "臀无膚，其行次且，厲，无大咎。",
            "xiang": "其行次且，行未牽也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "包无魚，起凶。",
            "xiang": "无魚之凶，遠民也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "以杞包瓜，含章，有隕自天。",
            "xiang": "九五含章，中正也。有隕自天，志不舍命也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "姤其角，吝，无咎。",
            "xiang": "姤其角，上窮吝也。"
          }
        ]
      },
      {
        "id": 45,
        "name": "萃卦",
        "daXiang": "澤上于地，萃；君子以除戎器，戒不虞。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "有孚不終，乃亂乃萃，若號一握為笑，勿恤，往无咎。",
            "xiang": "乃亂乃萃，其志亂也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "引吉，无咎，孚乃利用禴。",
            "xiang": "引吉无咎，中未變也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "萃如，嗟如，无攸利，往无咎，小吝。",
            "xiang": "往无咎，上巽也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "大吉，无咎。",
            "xiang": "大吉无咎，位不當也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "萃有位，无咎。匪孚，元永貞，悔亡。",
            "xiang": "萃有位，志未光也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "齎咨涕洟，无咎。",
            "xiang": "齎咨涕洟，未安上也。"
          }
        ]
      },
      {
        "id": 46,
        "name": "升卦",
        "daXiang": "地中生木，升；君子以順德，積小以高大。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "允升，大吉。",
            "xiang": "允升大吉，上合志也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "孚乃利用禴，无咎。",
            "xiang": "九二之孚，有喜也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "升虛邑。",
            "xiang": "升虛邑，无所疑也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "王用亨于岐山，吉无咎。",
            "xiang": "王用亨于岐山，順事也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "貞吉，升階。",
            "xiang": "貞吉升階，大得志也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "冥升，利于不息之貞。",
            "xiang": "冥升在上，消不富也。"
          }
        ]
      },
      {
        "id": 47,
        "name": "困卦",
        "daXiang": "澤无水，困；君子以致命遂志。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "臀困于株木，入于幽谷，三歲不覿。",
            "xiang": "入于幽谷，幽不明也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "困于酒食，朱紱方來，利用亨祀，征凶，无咎。",
            "xiang": "困于酒食，中有慶也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "困于石，據于蒺藜，入于其宮，不見其妻，凶。",
            "xiang": "據于蒺藜，乘剛也。入于其宮，不見其妻，不祥也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "來徐徐，困于金車，吝，有終。",
            "xiang": "來徐徐，志在下也。雖不當位，有與也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "劓刖，困于赤紱，乃徐有說，利用祭祀。",
            "xiang": "劓刖，志未得也。乃徐有說，以中直也。利用祭祀，受福也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "困于葛藟，于臲卼，曰動悔。有悔，征吉。",
            "xiang": "困于葛藟，未當也。動悔，有悔，吉行也。"
          }
        ]
      },
      {
        "id": 48,
        "name": "井卦",
        "daXiang": "木上有水，井；君子以勞民勸相。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "井泥不食，舊井无禽。",
            "xiang": "井泥不食，下也。舊井无禽，時舍也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "井谷射鮒，瓮敝漏。",
            "xiang": "井谷射鮒，无與也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "井渫不食，為我心惻，可用汲，王明，并受其福。",
            "xiang": "井渫不食，行惻也。求王明，受福也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "井甃，无咎。",
            "xiang": "井甃无咎，修井也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "井冽，寒泉食。",
            "xiang": "寒泉之食，中正也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "井收勿幕，有孚元吉。",
            "xiang": "元吉在上，大成也。"
          }
        ]
      },
      {
        "id": 49,
        "name": "革卦",
        "daXiang": "澤中有火，革；君子以治歷明時。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "鞏用黃牛之革。",
            "xiang": "鞏用黃牛，不可以有為也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "巳日乃革之，征吉，无咎。",
            "xiang": "巳日革之，行有嘉也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "征凶，貞厲，革言三就，有孚。",
            "xiang": "革言三就，又何之矣。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "悔亡，有孚改命，吉。",
            "xiang": "改命之吉，信志也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "大人虎變，未占有孚。",
            "xiang": "大人虎變，其文炳也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "君子豹變，小人革面，征凶，居貞吉。",
            "xiang": "君子豹變，其文蔚也。小人革面，順以從君也。"
          }
        ]
      },
      {
        "id": 50,
        "name": "鼎卦",
        "daXiang": "木上有火，鼎；君子以正位凝命。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "鼎顛趾，利出否，得妾以其子，无咎。",
            "xiang": "鼎顛趾，未悖也。利出否，以從貴也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "鼎有實，我仇有疾，不我能即，吉。",
            "xiang": "鼎有實，慎所之也。我仇有疾，終无尤也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "鼎耳革，其行塞，雉膏不食，方雨虧悔，終吉。",
            "xiang": "鼎耳革，失其義也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "鼎折足，覆公餗，其形渥，凶。",
            "xiang": "覆公餗，信如何也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "鼎黃耳金鉉，利貞。",
            "xiang": "鼎黃耳，中以為實也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "鼎玉鉉，大吉，无不利。",
            "xiang": "玉鉉在上，剛柔節也。"
          }
        ]
      },
      {
        "id": 51,
        "name": "震卦",
        "daXiang": "洊雷，震；君子以恐懼修省。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "震來虩虩，后笑言啞啞，吉。",
            "xiang": "震來虩虩，恐致福也。笑言啞啞，后有則也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "震來厲，億喪貝，躋于九陵，勿逐，七日得。",
            "xiang": "震來厲，乘剛也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "震蘇蘇，震行无眚。",
            "xiang": "震蘇蘇，位不當也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "震遂泥。",
            "xiang": "震遂泥，未光也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "震往來厲，億无喪，有事。",
            "xiang": "震往來厲，危行也。其事在中，大无喪也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "震索索，視矍矍，征凶。震不于其躬，于其鄰，无咎。婚媾有言。",
            "xiang": "震索索，中未得也。雖凶无咎，畏鄰戒也。"
          }
        ]
      },
      {
        "id": 52,
        "name": "艮卦",
        "daXiang": "兼山，艮；君子以思不出其位。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "艮其趾，无咎，利永貞。",
            "xiang": "艮其趾，未失正也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "艮其腓，不拯其隨，其心不快。",
            "xiang": "不拯其隨，未退聽也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "艮其限，列其夤，厲薰心。",
            "xiang": "艮其限，危薰心也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "艮其身，无咎。",
            "xiang": "艮其身，止諸躬也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "艮其輔，言有序，悔亡。",
            "xiang": "艮其輔，以中正也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "敦艮，吉。",
            "xiang": "敦艮之吉，以厚終也。"
          }
        ]
      },
      {
        "id": 53,
        "name": "渐卦",
        "daXiang": "山上有木，漸；君子以居賢德，善俗。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "鴻漸于干，小子厲，有言，无咎。",
            "xiang": "小子之厲，義无咎也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "鴻漸于磐，飲食衎衎，吉。",
            "xiang": "飲食衎衎，不素飽也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "鴻漸于陸，夫征不復，婦孕不育，凶；利禦寇。",
            "xiang": "夫征不復，離群丑也。婦孕不育，失其道也。利用禦寇，順相保也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "鴻漸于木，或得其桷，无咎。",
            "xiang": "或得其桷，順以巽也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "鴻漸于陵，婦三歲不孕，終莫之勝，吉。",
            "xiang": "終莫之勝，吉；得所愿也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "鴻漸于陸，其羽可用為儀，吉。",
            "xiang": "其羽可用為儀，吉；不可亂也。"
          }
        ]
      },
      {
        "id": 54,
        "name": "归妹卦",
        "daXiang": "澤上有雷，歸妹；君子以永終知敝。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "歸妹以娣，跛能履，征吉。",
            "xiang": "歸妹以娣，以恆也。跛能履吉，相承也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "眇能視，利幽人之貞。",
            "xiang": "利幽人之貞，未變常也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "歸妹以須，反歸以娣。",
            "xiang": "歸妹以須，未當也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "歸妹愆期，遲歸有時。",
            "xiang": "愆期之志，有待而行也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "帝乙歸妹，其君之袂，不如其娣之袂良，月幾望，吉。",
            "xiang": "帝乙歸妹，不如其娣之袂良也。其位在中，以貴行也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "女承筐无實，士刲羊无血，无攸利。",
            "xiang": "上六无實，承虛筐也。"
          }
        ]
      },
      {
        "id": 55,
        "name": "丰卦",
        "daXiang": "雷電皆至，豐；君子以折獄致刑。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "遇其配主，雖旬无咎，往有尚。",
            "xiang": "雖旬无咎，過旬災也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "豐其蔀，日中見斗，往得疑疾，有孚發若，吉。",
            "xiang": "有孚發若，信以發志也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "豐其沛，日中見沫，折其右肱，无咎。",
            "xiang": "豐其沛，不可大事也。折其右肱，終不可用也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "豐其蔀，日中見斗，遇其夷主，吉。",
            "xiang": "豐其蔀，位不當也。日中見斗，幽不明也。遇其夷主，吉；行也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "來章，有慶譽，吉。",
            "xiang": "六五之吉，有慶也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "豐其屋，蔀其家，窺其戶，闃其无人，三歲不觌，凶。",
            "xiang": "豐其屋，天際翔也。窺其戶，闃其无人，自藏也。"
          }
        ]
      },
      {
        "id": 56,
        "name": "旅卦",
        "daXiang": "山上有火，旅；君子以明慎用刑，而不留獄。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "旅瑣瑣，斯其所取災。",
            "xiang": "旅瑣瑣，志窮災也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "旅即次，懷其資，得童僕貞。",
            "xiang": "得童僕貞，終无尤也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "旅焚其次，喪其童僕，貞厲。",
            "xiang": "旅焚其次，亦以傷矣。以旅與下，其義喪也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "旅于處，得其資斧，我心不快。",
            "xiang": "旅于處，未得位也。得其資斧，心未快也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "射雉一矢亡，終以譽命。",
            "xiang": "終以譽命，上逮也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "鳥焚其巢，旅人先笑后號咷。喪牛于易，凶。",
            "xiang": "以旅在上，其義焚也。喪牛于易，終莫之聞也。"
          }
        ]
      },
      {
        "id": 57,
        "name": "巽卦",
        "daXiang": "隨風，巽；君子以申命行事。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "進退，利武人之貞。",
            "xiang": "進退，志疑也。利武人之貞，志治也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "巽在牀下，用史巫紛若，吉无咎。",
            "xiang": "紛若之吉，得中也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "頻巽，吝。",
            "xiang": "頻巽之吝，志窮也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "悔亡，田獲三品。",
            "xiang": "田獲三品，有功也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "貞吉悔亡，无不利。无初有終，先庚三日，后庚三日，吉。",
            "xiang": "九五之吉，位正中也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "巽在牀下，喪其資斧，貞凶。",
            "xiang": "巽在牀下，上窮也。喪其資斧，正乎凶也。"
          }
        ]
      },
      {
        "id": 58,
        "name": "兑卦",
        "daXiang": "麗澤，兌；君子以朋友講習。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "和兌，吉。",
            "xiang": "和兌之吉，行未疑也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "孚兌，吉，悔亡。",
            "xiang": "孚兌之吉，信志也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "來兌，凶。",
            "xiang": "來兌之凶，位不當也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "商兌，未寧，介疾有喜。",
            "xiang": "九四之喜，有慶也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "孚于剝，有厲。",
            "xiang": "孚于剝，位正當也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "引兌。",
            "xiang": "上六引兌，未光也。"
          }
        ]
      },
      {
        "id": 59,
        "name": "涣卦",
        "daXiang": "風行水上，渙；先王以享于帝立廟。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "用拯馬壯，吉。",
            "xiang": "初六之吉，順也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "渙奔其机，悔亡。",
            "xiang": "渙奔其机，得愿也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "渙其躬，无悔。",
            "xiang": "渙其躬，志在外也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "渙其群，元吉。渙有丘，匪夷所思。",
            "xiang": "渙其群，元吉；光大也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "渙汗其大號，渙王居，无咎。",
            "xiang": "王居无咎，正位也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "渙其血，去逖出，无咎。",
            "xiang": "渙其血，遠害也。"
          }
        ]
      },
      {
        "id": 60,
        "name": "节卦",
        "daXiang": "澤上有水，節；君子以制數度，議德行。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "不出戶庭，无咎。",
            "xiang": "不出戶庭，知通塞也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "不出門庭，凶。",
            "xiang": "不出門庭，失時極也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "不節若，則嗟若，无咎。",
            "xiang": "不節之嗟，又誰咎也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "安節，亨。",
            "xiang": "安節之亨，承上道也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "甘節，吉；往有尚。",
            "xiang": "甘節之吉，居位中也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "苦節，貞凶，悔亡。",
            "xiang": "苦節貞凶，其道窮也。"
          }
        ]
      },
      {
        "id": 61,
        "name": "中孚卦",
        "daXiang": "澤上有風，中孚；君子以議獄緩死。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "虞吉，有他不燕。",
            "xiang": "初九虞吉，志未變也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "鳴鶴在陰，其子和之，我有好爵，吾與爾靡之。",
            "xiang": "其子和之，中心愿也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "得敵，或鼓或罷，或泣或歌。",
            "xiang": "可鼓或罷，位不當也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "月几望，馬匹亡，无咎。",
            "xiang": "馬匹亡，絕類上也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "有孚攣如，无咎。",
            "xiang": "有孚攣如，位正當也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "翰音登于天，貞凶。",
            "xiang": "翰音登于天，何可長也。"
          }
        ]
      },
      {
        "id": 62,
        "name": "小过卦",
        "daXiang": "山上有雷，小過；君子以行過乎恭，喪過乎哀，用過乎儉。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "飛鳥以凶。",
            "xiang": "飛鳥以凶，不可如何也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "過其祖，遇其妣；不及其君，遇其臣；无咎。",
            "xiang": "不及其君，臣不可過也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "弗過防之，從或戕之，凶。",
            "xiang": "從或戕之，凶如何也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "无咎，弗過遇之。往厲必戒，勿用永貞。",
            "xiang": "弗過遇之，位不當也。往厲必戒，終不可長也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "密云不雨，自我西郊，公弋取彼在穴。",
            "xiang": "密云不雨，已上也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "弗遇過之，飛鳥離之，凶，是謂災眚。",
            "xiang": "弗遇過之，已亢也。"
          }
        ]
      },
      {
        "id": 63,
        "name": "既济卦",
        "daXiang": "水在火上，既濟；君子以思患而豫防之。",
        "lines": [
          {
            "position": 1,
            "title": "初九",
            "original": "曳其輪，濡其尾，无咎。",
            "xiang": "曳其輪，義无咎也。"
          },
          {
            "position": 2,
            "title": "六二",
            "original": "婦喪其茀，勿逐，七日得。",
            "xiang": "七日得，以中道也。"
          },
          {
            "position": 3,
            "title": "九三",
            "original": "高宗伐鬼方，三年克之，小人勿用。",
            "xiang": "三年克之，憊也。"
          },
          {
            "position": 4,
            "title": "六四",
            "original": "繻有衣袽，終日戒。",
            "xiang": "終日戒，有所疑也。"
          },
          {
            "position": 5,
            "title": "九五",
            "original": "東鄰殺牛，不如西鄰之禴祭，實受其福。",
            "xiang": "東鄰殺牛，不如西鄰之時也；實受其福，吉大來也。"
          },
          {
            "position": 6,
            "title": "上六",
            "original": "濡其首，厲。",
            "xiang": "濡其首厲，何可久也。"
          }
        ]
      },
      {
        "id": 64,
        "name": "未济卦",
        "daXiang": "火在水上，未濟；君子以慎辨物居方。",
        "lines": [
          {
            "position": 1,
            "title": "初六",
            "original": "濡其尾，吝。",
            "xiang": "濡其尾，亦不知極也。"
          },
          {
            "position": 2,
            "title": "九二",
            "original": "曳其輪，貞吉。",
            "xiang": "九二貞吉，中以行正也。"
          },
          {
            "position": 3,
            "title": "六三",
            "original": "未濟，征凶，利涉大川。",
            "xiang": "未濟征凶，位不當也。"
          },
          {
            "position": 4,
            "title": "九四",
            "original": "貞吉，悔亡，震用伐鬼方，三年有賞于大國。",
            "xiang": "貞吉悔亡，志行也。"
          },
          {
            "position": 5,
            "title": "六五",
            "original": "貞吉，无悔，君子之光，有孚，吉。",
            "xiang": "君子之光，其暉吉也。"
          },
          {
            "position": 6,
            "title": "上九",
            "original": "有孚于飲酒，无咎，濡其首，有孚失是。",
            "xiang": "飲酒濡首，亦不知節也。"
          }
        ]
      }
    ];
    
    module.exports = { YAO_DATA };
    
    
  });

  define("../data/hexagramData", function (module, exports, require) {
    /**
     * 数据层 - 六十四卦数据
     * 包含：六十四卦的名称、卦象、卦辞等基础数据
     */
    
    const { YAO_DATA } = require('./yaoData');
    
    // 八卦基础
    const BA_GUA = [
      { name: '乾', symbol: '☰', nature: '天', attribute: '刚健', lines: [1, 1, 1] },
      { name: '坤', symbol: '☷', nature: '地', attribute: '柔顺', lines: [0, 0, 0] },
      { name: '震', symbol: '☳', nature: '雷', attribute: '动', lines: [0, 0, 1] },
      { name: '巽', symbol: '☴', nature: '风', attribute: '入', lines: [1, 1, 0] },
      { name: '坎', symbol: '☵', nature: '水', attribute: '陷', lines: [0, 1, 0] },
      { name: '离', symbol: '☲', nature: '火', attribute: '丽', lines: [1, 0, 1] },
      { name: '艮', symbol: '☶', nature: '山', attribute: '止', lines: [0, 1, 1] },
      { name: '兑', symbol: '☱', nature: '泽', attribute: '悦', lines: [1, 0, 0] }
    ];
    
    // 六十四卦
    const SIXTY_FOUR_GUA = [
      { id: 1, name: '乾卦', nameEn: 'The Creative', symbol: '䷀', upper: '乾', lower: '乾',
        meaning: '天行健，君子以自强不息', 
        description: '乾卦以天的刚健运行取象，强调主动、创造与持守正道；能否亨通仍取决于是否合宜而坚定。',
        fortune: '大吉', 
        advice: '可以主动进取，但须以正当、稳健为前提。保持自省并根据现实条件决定行动幅度。' },
      { id: 2, name: '坤卦', nameEn: 'The Receptive', symbol: '䷁', upper: '坤', lower: '坤',
        meaning: '地势坤，君子以厚德载物',
        description: '坤卦象征地，柔顺包容。表示需要以柔克刚，以包容的态度对待事物。',
        fortune: '大吉',
        advice: '以柔克刚，包容万物。现在适合默默耕耘，积累经验。您的柔顺和耐心将为您赢得尊重和支持。' },
      { id: 3, name: '屯卦', nameEn: 'Difficulty at the Beginning', symbol: '䷂', upper: '坎', lower: '震',
        meaning: '云雷屯，君子以经纶',
        description: '屯卦象征万物始生，充满艰难。表示事物刚开始，面临诸多困难和挑战。',
        fortune: '小吉',
        advice: '万事开头难，不要急于求成。虽然面临困难，但只要坚持，就会看到转机。现在适合打好基础，为将来做准备。' },
      { id: 4, name: '蒙卦', nameEn: 'Youthful Folly', symbol: '䷃', upper: '艮', lower: '坎',
        meaning: '山下出泉，蒙',
        description: '蒙卦象征蒙昧无知，需要启蒙。表示处于学习和成长的初期阶段。',
        fortune: '中平',
        advice: '虚心学习，寻求指导。承认自己的不足并不可耻，反而是智慧的开始。寻找良师益友，他们的经验将帮助您成长。' },
      { id: 5, name: '需卦', nameEn: 'Waiting', symbol: '䷄', upper: '坎', lower: '乾',
        meaning: '云上于天，需',
        description: '需卦象征等待，云在天上，待时降雨。表示需要耐心等待时机成熟。',
        fortune: '小吉',
        advice: '耐心等待，时机未到。现在不是强行推进的时候。养精蓄锐，做好准备，当时机来临时，您将一鸣惊人。' },
      { id: 6, name: '讼卦', nameEn: 'Conflict', symbol: '䷅', upper: '乾', lower: '坎',
        meaning: '天与水违行，讼',
        description: '讼卦象征争讼，天与水相背而行。表示存在矛盾和冲突，需要谨慎处理。',
        fortune: '凶',
        advice: '避免争端，以和为贵。争讼往往两败俱伤。尝试通过沟通和妥协来解决问题，保持冷静和理性。' },
      { id: 7, name: '师卦', nameEn: 'The Army', symbol: '䷆', upper: '坤', lower: '坎',
        meaning: '地中有水，师',
        description: '师卦象征军队，聚众行事。表示需要组织力量，团结一致来达成目标。',
        fortune: '中平',
        advice: '团结协作，纪律严明。成功需要团队的力量。选择可靠的伙伴，明确目标和分工，共同前进。' },
      { id: 8, name: '比卦', nameEn: 'Holding Together', symbol: '䷇', upper: '坎', lower: '坤',
        meaning: '地上有水，比',
        description: '比卦象征亲近，水在地上，相亲相辅。表示需要亲近有德之人，建立良好关系。',
        fortune: '吉',
        advice: '亲近贤德，互助合作。与正直、积极的人同行，真诚的关系会带来力量和支持。' },
      { id: 9, name: '小畜卦', nameEn: 'The Taming Power of the Small', symbol: '䷈', upper: '巽', lower: '乾',
        meaning: '风行天上，小畜',
        description: '小畜卦象征小有蓄积。表示力量尚小，需要逐步积累，不可冒进。',
        fortune: '小吉',
        advice: '小有蓄积，稳步前进。不要小看微小的进步，积少成多。保持耐心和毅力，您的努力终将汇聚成河。' },
      { id: 10, name: '履卦', nameEn: 'Treading', symbol: '䷉', upper: '乾', lower: '兑',
        meaning: '上天下泽，履',
        description: '履卦象征谨慎行走。表示需要小心谨慎，按照规则行事。',
        fortune: '中平',
        advice: '谨慎行事，循规蹈矩。即使面对困难，也要保持礼节和原则。您的谨慎将帮助您避免不必要的麻烦。' },
      { id: 11, name: '泰卦', nameEn: 'Peace', symbol: '䷊', upper: '坤', lower: '乾',
        meaning: '天地交，泰',
        description: '泰卦以天地交感取象，表示上下沟通、条件趋于协调；顺势而行仍需防止由泰转否。',
        fortune: '大吉',
        advice: '利用沟通顺畅、条件协调的阶段推进要事，同时预留调整空间，避免因顺境而松懈。' },
      { id: 12, name: '否卦', nameEn: 'Standstill', symbol: '䷋', upper: '乾', lower: '坤',
        meaning: '天地不交，否',
        description: '否卦象征闭塞，天地不交。表示事物处于逆境，需要坚守正道等待转机。',
        fortune: '凶',
        advice: '逆境之中，坚守正道。虽然暂时困顿，但请相信否极泰来。保持内心的光明，黑暗终将过去。' },
      { id: 13, name: '同人卦', nameEn: 'Fellowship with Men', symbol: '䷌', upper: '乾', lower: '离',
        meaning: '天与火，同人',
        description: '同人卦象征和同于人。表示需要与他人合作，追求共同的目标。',
        fortune: '吉',
        advice: '志同道合，携手并进。寻找与您有共同理想的人，团结的力量将帮助您实现更大的目标。' },
      { id: 14, name: '大有卦', nameEn: 'Possession in Great Measure', symbol: '䷍', upper: '离', lower: '乾',
        meaning: '火在天上，大有',
        description: '大有卦表示资源、成果或影响力较为充足；重点在于以光明、公正的方式善用所有。',
        fortune: '大吉',
        advice: '盘点并善用现有资源，保持公正与分享；不要把“拥有较多”误当成结果已经确定。' },
      { id: 15, name: '谦卦', nameEn: 'Modesty', symbol: '䷎', upper: '坤', lower: '艮',
        meaning: '地中有山，谦',
        description: '谦卦象征谦虚。表示以谦虚的态度处世，能够获得真正的尊重。',
        fortune: '大吉',
        advice: '谦虚待人，厚德载物。谦虚不是软弱，而是一种智慧。保持谦逊，您将赢得更多的尊重和支持。' },
      { id: 16, name: '豫卦', nameEn: 'Enthusiasm', symbol: '䷏', upper: '震', lower: '坤',
        meaning: '雷出地奋，豫',
        description: '豫卦象征喜悦。表示事情发展顺利，充满喜悦和希望。',
        fortune: '吉',
        advice: '顺势而为，喜悦前行。保持乐观的心态，积极行动。您的热情将感染周围的人，共同创造美好的未来。' },
      { id: 17, name: '随卦', nameEn: 'Following', symbol: '䷐', upper: '兑', lower: '震',
        meaning: '泽中有雷，随',
        description: '随卦象征随从。表示需要顺应时势，跟随正确的方向。',
        fortune: '中平',
        advice: '随遇而安，顺应时势。有时候跟随比引领更明智。选择正确的方向，顺其自然，一切都会水到渠成。' },
      { id: 18, name: '蛊卦', nameEn: 'Work on What Has Been Spoiled', symbol: '䷑', upper: '艮', lower: '巽',
        meaning: '山下有风，蛊',
        description: '蛊卦象征腐败和革新。表示事物已经腐败，需要革除积弊。',
        fortune: '凶',
        advice: '革除积弊，勇于改变。虽然改变是痛苦的，但只有这样才能获得新生。勇敢地面对问题，着手解决。' },
      { id: 19, name: '临卦', nameEn: 'Approach', symbol: '䷒', upper: '坤', lower: '兑',
        meaning: '泽上有地，临',
        description: '临卦表示接近、莅临与向下关怀，条件有利于推进；卦辞同时提醒盛势有期限，不可失去警觉。',
        fortune: '吉',
        advice: '主动接近问题和相关的人，以关怀而非压迫的方式推进；同时为后续变化预作准备。' },
      { id: 20, name: '观卦', nameEn: 'Contemplation', symbol: '䷓', upper: '巽', lower: '坤',
        meaning: '风行地上，观',
        description: '观卦象征观察。表示需要仔细观察和学习，不要急于行动。',
        fortune: '中平',
        advice: '仔细观察，深思熟虑。在做决定之前，先全面了解情况。观察他人的经验和教训，这将帮助您做出更好的选择。' },
      { id: 21, name: '噬嗑卦', nameEn: 'Biting Through', symbol: '䷔', upper: '离', lower: '震',
        meaning: '雷电噬嗑',
        description: '噬嗑卦象征咬合。表示需要果断地解决问题，消除障碍。',
        fortune: '中平',
        advice: '果断行事，消除障碍。面对困难不要犹豫，果断地采取行动。您的决心将帮助您突破困境。' },
      { id: 22, name: '贲卦', nameEn: 'Grace', symbol: '䷕', upper: '艮', lower: '离',
        meaning: '山下有火，贲',
        description: '贲卦象征装饰。表示事物外表美观，但要注意内在实质。',
        fortune: '小吉',
        advice: '注重内涵，不尚虚华。外表的装饰固然美好，但内在的实质更为重要。追求真正的价值，而非表面的光鲜。' },
      { id: 23, name: '剥卦', nameEn: 'Splitting Apart', symbol: '䷖', upper: '艮', lower: '坤',
        meaning: '山附于地，剥',
        description: '剥卦象征剥落。表示事物正在衰败，需要接受现实，保存实力。',
        fortune: '凶',
        advice: '接受现实，保存实力。有时候退让是为了更好地前进。接受损失，保存核心力量，等待东山再起。' },
      { id: 24, name: '复卦', nameEn: 'Return', symbol: '䷗', upper: '坤', lower: '震',
        meaning: '雷在地中，复',
        description: '复卦象征回复。表示事物开始复苏，阳气初生。',
        fortune: '吉',
        advice: '否极泰来，重新开始。最黑暗的时刻已经过去，光明正在降临。把握这个新的开始，重新出发。' },
      { id: 25, name: '无妄卦', nameEn: 'Innocence', symbol: '䷘', upper: '乾', lower: '震',
        meaning: '天下雷行，无妄',
        description: '无妄卦象征不妄为。表示需要真诚待人，不做虚伪之事。',
        fortune: '中平',
        advice: '真诚待人，不妄作为。保持真诚和正直，不要心存侥幸。脚踏实地，以诚实的努力争取结果。' },
      { id: 26, name: '大畜卦', nameEn: 'The Taming Power of the Great', symbol: '䷙', upper: '艮', lower: '乾',
        meaning: '山天大畜',
        description: '大畜卦表示大力蓄养才能、德行与资源；宜继续充实自己，并在条件成熟时承担更大的行动。',
        fortune: '吉',
        advice: '继续积累能力与资源，是否行动应看条件是否成熟；涉险前先确认准备、支持与退路。' },
      { id: 27, name: '颐卦', nameEn: 'The Corners of the Mouth', symbol: '䷚', upper: '艮', lower: '震',
        meaning: '山下有雷，颐',
        description: '颐卦象征养生。表示需要注重自我修养和身心健康。',
        fortune: '中平',
        advice: '修身养性，注重健康。身体是革命的本钱。照顾好自己，保持身心健康，这将帮助您走得更远。' },
      { id: 28, name: '大过卦', nameEn: 'Preponderance of the Great', symbol: '䷛', upper: '兑', lower: '巽',
        meaning: '泽灭木，大过',
        description: '大过卦象征大的过度。表示事情已经过度，需要及时调整。',
        fortune: '凶',
        advice: '及时调整，回归平衡。事情已经走到了极端，需要及时回头。找到平衡点，避免进一步的损失。' },
      { id: 29, name: '坎卦', nameEn: 'The Abysmal', symbol: '䷜', upper: '坎', lower: '坎',
        meaning: '水洊至，习坎',
        description: '坎卦象征险陷。表示面临重重困难和危险。',
        fortune: '凶',
        advice: '处险不惊，诚信可破。面对困难保持冷静，用诚信和智慧来化解危机。相信困难终将过去。' },
      { id: 30, name: '离卦', nameEn: 'The Clinging', symbol: '䷝', upper: '离', lower: '离',
        meaning: '明两作，离',
        description: '离卦象征光明。表示内心光明，但需要依附正道。',
        fortune: '中平',
        advice: '光明磊落，依附正道。保持内心的光明和正直。依附正确的人和事物，这将给您带来力量。' },
      { id: 31, name: '咸卦', nameEn: 'Influence', symbol: '䷞', upper: '兑', lower: '艮',
        meaning: '山上有泽，咸',
        description: '咸卦象征感应。表示心灵相通，互相感应。',
        fortune: '吉',
        advice: '心灵感应，真诚相待。用心去感受，用真诚去交流。真诚的沟通将打开新的可能。' },
      { id: 32, name: '恒卦', nameEn: 'Duration', symbol: '䷟', upper: '震', lower: '巽',
        meaning: '雷风恒',
        description: '恒卦象征恒久。表示需要持之以恒，坚持正道。',
        fortune: '吉',
        advice: '持之以恒，坚持正道。成功需要时间的积累。不要轻言放弃，坚持下去，您将收获丰硕的果实。' },
      { id: 33, name: '遁卦', nameEn: 'Retreat', symbol: '䷠', upper: '乾', lower: '艮',
        meaning: '天下有山，遁',
        description: '遁卦象征退避。表示需要暂时退避，保存实力。',
        fortune: '小吉',
        advice: '以退为进，保存实力。有时候退让不是懦弱，而是智慧。暂时退避，等待更好的时机再出击。' },
      { id: 34, name: '大壮卦', nameEn: 'The Power of the Great', symbol: '䷡', upper: '震', lower: '乾',
        meaning: '雷在天上，大壮',
        description: '大壮卦象征大壮盛。表示力量强大，但需要谨慎使用。',
        fortune: '中平',
        advice: '力量强大，谨慎使用。拥有强大的力量是优势，但要谨慎使用。避免滥用力量，保持谦逊。' },
      { id: 35, name: '晋卦', nameEn: 'Progress', symbol: '䷢', upper: '离', lower: '坤',
        meaning: '明出地上，晋',
        description: '晋卦以光明升出地面取象，表示获得展现和推进的机会；是否上升仍有赖于受到信任并善用机会。',
        fortune: '吉',
        advice: '把握被看见和获得支持的机会，稳步展示成果；不要把短期进展等同于长期成功。' },
      { id: 36, name: '明夷卦', nameEn: 'Darkening of the Light', symbol: '䷣', upper: '坤', lower: '离',
        meaning: '明入地中，明夷',
        description: '明夷卦象征光明受损。表示处于逆境，需要韬光养晦。',
        fortune: '凶',
        advice: '韬光养晦，保存光明。暂时隐藏您的光芒，等待时机。相信黑暗终将过去，光明必将重现。' },
      { id: 37, name: '家人卦', nameEn: 'The Family', symbol: '䷤', upper: '巽', lower: '离',
        meaning: '风火家人',
        description: '家人卦象征家庭。表示家庭和睦，内外有序。',
        fortune: '吉',
        advice: '家和万事兴，内外有序。家庭是您最坚实的后盾。珍惜家人，维护和睦，这将给您带来无限的力量。' },
      { id: 38, name: '睽卦', nameEn: 'Opposition', symbol: '䷥', upper: '离', lower: '兑',
        meaning: '上火下泽，睽',
        description: '睽卦象征背离。表示存在分歧和矛盾，需要求同存异。',
        fortune: '凶',
        advice: '求同存异，化解矛盾。虽然有分歧，但总有共同点。寻找共识，化解矛盾，和谐相处。' },
      { id: 39, name: '蹇卦', nameEn: 'Obstruction', symbol: '䷦', upper: '坎', lower: '艮',
        meaning: '山上有水，蹇',
        description: '蹇卦象征困难。表示面临艰难险阻，需要坚持不懈。',
        fortune: '凶',
        advice: '面对困难，坚持不懈。虽然道路艰难，但请不要放弃。每一步的前进都是胜利，坚持就是成功。' },
      { id: 40, name: '解卦', nameEn: 'Deliverance', symbol: '䷧', upper: '震', lower: '坎',
        meaning: '雷雨作，解',
        description: '解卦象征解脱。表示困难即将解除，迎来新的开始。',
        fortune: '吉',
        advice: '困难解除，迎接新生。雷雨过后，天空放晴。您即将从困境中解脱出来，迎接新的开始。' },
      { id: 41, name: '损卦', nameEn: 'Decrease', symbol: '䷨', upper: '艮', lower: '兑',
        meaning: '山泽损',
        description: '损卦象征减损。表示需要有所舍弃，才能获得更大的收获。',
        fortune: '中平',
        advice: '有舍有得，适度减损。有时候失去是为了更好地获得。学会放手，您将获得更大的空间和机会。' },
      { id: 42, name: '益卦', nameEn: 'Increase', symbol: '䷩', upper: '巽', lower: '震',
        meaning: '风雷益',
        description: '益卦表示增益与助益，尤其强调损上益下、把资源用在真正需要之处，并利于采取行动。',
        fortune: '大吉',
        advice: '把增益用在关键处并兼顾他人，适合推进有明确价值的行动；收益仍需通过执行兑现。' },
      { id: 43, name: '夬卦', nameEn: 'Break-through', symbol: '䷪', upper: '兑', lower: '乾',
        meaning: '泽上于天，夬',
        description: '夬卦象征决断。表示需要果断地做出决定，解决问题。',
        fortune: '中平',
        advice: '果断决断，解决问题。是时候做出决定了。相信自己的判断，果断行动，问题将得到解决。' },
      { id: 44, name: '姤卦', nameEn: 'Coming to Meet', symbol: '䷫', upper: '乾', lower: '巽',
        meaning: '天下有风，姤',
        description: '姤卦象征相遇。表示意外的相遇，需要谨慎对待。',
        fortune: '小凶',
        advice: '谨慎相遇，明辨是非。意外的相遇可能带来机遇，也可能带来麻烦。保持警惕，明辨是非。' },
      { id: 45, name: '萃卦', nameEn: 'Gathering Together', symbol: '䷬', upper: '兑', lower: '坤',
        meaning: '泽上于地，萃',
        description: '萃卦象征聚集。表示人们聚集在一起，共同追求目标。',
        fortune: '吉',
        advice: '汇聚力量，共同前行。团结就是力量。汇聚众人的智慧和力量，共同追求目标，成功指日可待。' },
      { id: 46, name: '升卦', nameEn: 'Pushing Upward', symbol: '䷭', upper: '坤', lower: '巽',
        meaning: '地中生木，升',
        description: '升卦以木从地中生长取象，表示循序向上；宜借助贤明支持，稳步推进而非期待骤然跃升。',
        fortune: '大吉',
        advice: '依靠持续积累与可靠支持逐步推进，不宜急于求高；每一步先站稳，再考虑下一步。' },
      { id: 47, name: '困卦', nameEn: 'Oppression', symbol: '䷮', upper: '兑', lower: '坎',
        meaning: '泽无水，困',
        description: '困卦象征困穷。表示处于困境，需要坚守正道。',
        fortune: '凶',
        advice: '困而不馁，坚守正道。即使身处困境，也不要放弃。坚守正道，保持希望，转机终将到来。' },
      { id: 48, name: '井卦', nameEn: 'The Well', symbol: '䷯', upper: '坎', lower: '巽',
        meaning: '木上有水，井',
        description: '井卦象征水井。表示需要不断修养自己，像井水一样滋养他人。',
        fortune: '中平',
        advice: '修身养性，滋养他人。像井水一样，不断充实自己，同时滋养他人。您的付出将获得回报。' },
      { id: 49, name: '革卦', nameEn: 'Revolution', symbol: '䷰', upper: '兑', lower: '离',
        meaning: '泽中有火，革',
        description: '革卦象征变革。表示需要彻底改革，破旧立新。',
        fortune: '中平',
        advice: '破旧立新，勇于变革。是时候做出改变了。勇敢地打破旧有的模式，建立新的秩序。' },
      { id: 50, name: '鼎卦', nameEn: 'The Cauldron', symbol: '䷱', upper: '离', lower: '巽',
        meaning: '火风鼎',
        description: '鼎卦象征鼎器。表示需要稳定基础，培养人才。',
        fortune: '吉',
        advice: '稳定基础，培养人才。建立稳固的基础，培养优秀的人才。这将为长远发展奠定坚实的根基。' },
      { id: 51, name: '震卦', nameEn: 'The Arousing', symbol: '䷲', upper: '震', lower: '震',
        meaning: '洊雷震',
        description: '震卦象征震动。表示突发事件，需要冷静应对。',
        fortune: '中平',
        advice: '处变不惊，冷静应对。突发事件不可避免，但您可以控制自己的反应。保持冷静，理性应对。' },
      { id: 52, name: '艮卦', nameEn: 'Keeping Still', symbol: '䷳', upper: '艮', lower: '艮',
        meaning: '兼山艮',
        description: '艮卦象征静止。表示需要停止行动，静心反思。',
        fortune: '中平',
        advice: '适可而止，静心反思。有时候停止比前进更明智。静下心来反思，您将获得更清晰的认识。' },
      { id: 53, name: '渐卦', nameEn: 'Development', symbol: '䷴', upper: '巽', lower: '艮',
        meaning: '山上有木，渐',
        description: '渐卦象征渐进。表示事物循序渐进，逐步发展。',
        fortune: '吉',
        advice: '循序渐进，稳步发展。不要急于求成，一步一个脚印。稳扎稳打，终将到达目标。' },
      { id: 54, name: '归妹卦', nameEn: 'The Marrying Maiden', symbol: '䷵', upper: '震', lower: '兑',
        meaning: '雷泽归妹',
        description: '归妹卦象征嫁娶。表示需要遵循礼节，按部就班。',
        fortune: '小凶',
        advice: '遵循礼节，按部就班。事情需要按照规矩来。不要急躁，遵循正确的程序和礼节。' },
      { id: 55, name: '丰卦', nameEn: 'Abundance', symbol: '䷶', upper: '震', lower: '离',
        meaning: '雷电皆至，丰',
        description: '丰卦表示事物达到盛大、充盈的阶段；盛极也容易转衰，因此宜把握当下并保持清醒。',
        fortune: '大吉',
        advice: '面对盛大或事务繁多的局面，应保持清晰和公开，及时决断，也要为盛势变化预留余地。' },
      { id: 56, name: '旅卦', nameEn: 'The Wanderer', symbol: '䷷', upper: '离', lower: '艮',
        meaning: '山上有火，旅',
        description: '旅卦象征旅行。表示需要谨慎行事，适应环境。',
        fortune: '小凶',
        advice: '谨慎行事，适应环境。您可能处于一个不熟悉的环境。保持谨慎，适应变化，保护好自己。' },
      { id: 57, name: '巽卦', nameEn: 'The Gentle', symbol: '䷸', upper: '巽', lower: '巽',
        meaning: '随风巽',
        description: '巽卦象征顺从。表示需要以柔克刚，顺应时势。',
        fortune: '中平',
        advice: '以柔克刚，顺应时势。柔软的力量往往比强硬更有效。顺应时势，灵活应对，您将无往不利。' },
      { id: 58, name: '兑卦', nameEn: 'The Joyous', symbol: '䷹', upper: '兑', lower: '兑',
        meaning: '丽泽兑',
        description: '兑卦象征喜悦。表示内心喜悦，但需要警惕过度。',
        fortune: '吉',
        advice: '喜悦之中，保持清醒。喜悦是好事，但不要过度。保持清醒和理性，避免乐极生悲。' },
      { id: 59, name: '涣卦', nameEn: 'Dispersion', symbol: '䷺', upper: '巽', lower: '坎',
        meaning: '风行水上，涣',
        description: '涣卦象征涣散。表示需要凝聚力量，团结一致。',
        fortune: '小吉',
        advice: '凝聚力量，团结一致。分散的力量需要重新凝聚。团结身边的人，共同面对挑战。' },
      { id: 60, name: '节卦', nameEn: 'Limitation', symbol: '䷻', upper: '坎', lower: '兑',
        meaning: '泽上有水，节',
        description: '节卦象征节制。表示需要适度节制，不可过度。',
        fortune: '中平',
        advice: '适度节制，保持平衡。凡事有度，过度则失。适度节制，保持生活和工作的平衡。' },
      { id: 61, name: '中孚卦', nameEn: 'Inner Truth', symbol: '䷼', upper: '巽', lower: '兑',
        meaning: '泽上有风，中孚',
        description: '中孚卦象征诚信。表示内心诚信，能够感动他人。',
        fortune: '大吉',
        advice: '诚信为本，感动他人。诚信是最宝贵的品质。以真诚待人，您将赢得信任和尊重。' },
      { id: 62, name: '小过卦', nameEn: 'Preponderance of the Small', symbol: '䷽', upper: '震', lower: '艮',
        meaning: '山上有雷，小过',
        description: '小过卦象征小的过度。表示有一些小的偏差，需要及时纠正。',
        fortune: '小凶',
        advice: '及时纠正，回归正轨。小的偏差如果不纠正，可能酿成大错。及时发现并纠正，回归正确的道路。' },
      { id: 63, name: '既济卦', nameEn: 'After Completion', symbol: '䷾', upper: '坎', lower: '离',
        meaning: '水火既济',
        description: '既济卦象征已经完成。表示事情已经成功，但需要保持警惕。',
        fortune: '中平',
        advice: '居安思危，保持警惕。成功之后更要小心。保持警惕，防止功亏一篑，确保长久的成功。' },
      { id: 64, name: '未济卦', nameEn: 'Before Completion', symbol: '䷿', upper: '离', lower: '坎',
        meaning: '火水未济',
        description: '未济卦表示事情尚未完成、秩序仍待建立；临近完成时更要谨慎，避免因最后一步失当而前功尽弃。',
        fortune: '小吉',
        advice: '事情尚未完成时，不宜因接近终点而放松。复核关键步骤，谨慎完成收尾，再判断结果。' }
    ];
    
    // 《周易》卦辞按文王卦序排列。“原文”和“白话解读”在数据层分开存储。
    const GUA_CI = [
      '元亨利贞。',
      '元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞吉。',
      '元亨利贞，勿用有攸往，利建侯。',
      '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
      '有孚，光亨，贞吉。利涉大川。',
      '有孚窒。惕中吉。终凶。利见大人，不利涉大川。',
      '贞，丈人吉，无咎。',
      '吉。原筮元永贞，无咎。不宁方来，后夫凶。',
      '亨。密云不雨，自我西郊。',
      '履虎尾，不咥人，亨。',
      '小往大来，吉亨。',
      '否之匪人，不利君子贞，大往小来。',
      '同人于野，亨。利涉大川，利君子贞。',
      '元亨。', '亨，君子有终。', '利建侯行师。', '元亨利贞，无咎。',
      '元亨，利涉大川。先甲三日，后甲三日。',
      '元亨利贞。至于八月有凶。', '盥而不荐，有孚顒若。', '亨。利用狱。',
      '亨。小利有攸往。', '不利有攸往。',
      '亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',
      '元亨利贞。其匪正有眚，不利有攸往。', '利贞，不家食吉，利涉大川。',
      '贞吉。观颐，自求口实。', '栋桡。利有攸往，亨。',
      '习坎，有孚，维心亨，行有尚。', '利贞，亨。畜牝牛吉。', '亨，利贞。取女吉。',
      '亨，无咎，利贞。利有攸往。', '亨，小利贞。', '利贞。',
      '康侯用锡马蕃庶，昼日三接。', '利艰贞。', '利女贞。', '小事吉。',
      '利西南，不利东北。利见大人。贞吉。', '利西南。无所往，其来复吉。有攸往，夙吉。',
      '有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。', '利有攸往，利涉大川。',
      '扬于王庭，孚号有厉。告自邑，不利即戎。利有攸往。', '女壮，勿用取女。',
      '亨。王假有庙，利见大人，亨，利贞。用大牲吉。利有攸往。', '元亨，用见大人，勿恤，南征吉。',
      '亨。贞大人吉，无咎。有言不信。', '改邑不改井，无丧无得。往来井井。汔至，亦未繘井，羸其瓶，凶。',
      '己日乃孚。元亨利贞，悔亡。', '元吉，亨。',
      '亨。震来虩虩，笑言哑哑，震惊百里，不丧匕鬯。', '艮其背，不获其身，行其庭，不见其人，无咎。',
      '女归吉，利贞。', '征凶，无攸利。', '亨。王假之，勿忧，宜日中。', '小亨。旅贞吉。',
      '小亨。利有攸往，利见大人。', '亨，利贞。', '亨。王假有庙，利涉大川，利贞。', '亨。苦节不可贞。',
      '豚鱼，吉，利涉大川，利贞。', '亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。',
      '亨小，利贞。初吉终乱。', '亨。小狐汔济，濡其尾，无攸利。'
    ];
    
    // 《象传》大象的取象句；不再与卦辞或产品化断语混用。
    const XIANG_CI = [
      '天行健', '地势坤', '云雷，屯', '山下出泉，蒙', '云上于天，需', '天与水违行，讼', '地中有水，师', '地上有水，比',
      '风行天上，小畜', '上天下泽，履', '天地交，泰', '天地不交，否', '天与火，同人', '火在天上，大有', '地中有山，谦', '雷出地奋，豫',
      '泽中有雷，随', '山下有风，蛊', '泽上有地，临', '风行地上，观', '雷电，噬嗑', '山下有火，贲', '山附于地，剥', '雷在地中，复',
      '天下雷行，物与无妄', '天在山中，大畜', '山下有雷，颐', '泽灭木，大过', '水洊至，习坎', '明两作，离', '山上有泽，咸', '雷风，恒',
      '天下有山，遁', '雷在天上，大壮', '明出地上，晋', '明入地中，明夷', '风自火出，家人', '上火下泽，睽', '山上有水，蹇', '雷雨作，解',
      '山下有泽，损', '风雷，益', '泽上于天，夬', '天下有风，姤', '泽上于地，萃', '地中生木，升', '泽无水，困', '木上有水，井',
      '泽中有火，革', '木上有火，鼎', '洊雷，震', '兼山，艮', '山上有木，渐', '泽上有雷，归妹', '雷电皆至，丰', '山上有火，旅',
      '随风，巽', '丽泽，兑', '风行水上，涣', '泽上有水，节', '泽上有风，中孚', '山上有雷，小过', '水在火上，既济', '火在水上，未济'
    ];
    
    SIXTY_FOUR_GUA.forEach((hexagram, index) => {
      hexagram.guaCi = GUA_CI[index];
      hexagram.xiangCi = YAO_DATA[index].daXiang || XIANG_CI[index];
      hexagram.meaning = hexagram.xiangCi;
      hexagram.yaoLines = YAO_DATA[index].lines;
      hexagram.plainInterpretation = hexagram.description;
      hexagram.classicSource = '《周易》经文；《易传·象传》';
      hexagram.classicSourceURL = 'https://zh.wikisource.org/wiki/%E5%91%A8%E6%98%93';
    });
    
    // 现代解读库：与经文分层存储，避免把产品化建议冒充经典原文。
    // 每行依次为：局势 | 判断重点 | 风险 | 事业 | 家庭 | 健康 | 感情 | 行动。
    const INTERPRETATION_ROWS = [
      '创造力旺盛，局面允许主动开创|所行是否正当，实力是否匹配|刚过易折，居高忘退|可争取主导权，但要接受复盘与制衡|承担责任而不独断，给家人留出表达空间|精力虽盛也要防止过劳，保持睡眠节律|态度明确、积极推进，同时尊重对方的节奏|选一件最重要的事主动推进，并设定止损点',
      '条件需要承载、配合和长期培育|能否辨明方向并守住本分|一味顺从会失去主心骨|先做好支持、落地和资源协调，不必抢头功|以包容维持家庭，但边界和原则要说清|重在规律饮食、休息与稳定的日常|慢热而务实，看对方是否愿意稳定付出|确认方向后，把基础工作连续做七天',
      '新事初生，混乱和阻滞是发展的一部分|是否先建立秩序、人手和基础|急于证明结果会使小问题扩大|项目适合试点，先定角色、流程和最小目标|新安排需要磨合，先处理最影响生活的一件事|压力易使作息失序，先恢复基本节律|关系在起步期，不宜过早要求确定答案|把问题拆成三步，今天只完成第一步',
      '信息不足或认知尚浅，当下是学习期|是否找到值得信任的指导和正确问法|反复占问、急求答案反而增加混乱|请教懂行者，用小任务验证所学|对不懂的家人少责备，用具体规则教会|不自行诊断，记录症状后向专业人士求证|先了解对方而非凭想象定性关系|写下三个事实和三个未知，再去询问一位可靠的人',
      '条件正在聚集，等待是有准备的停顿|资源、时机和信任是否真正到位|焦虑中强行启动容易陷入险境|完善方案和预案，等明确信号再投入|暂缓争论，等情绪平稳后讨论正事|等待不等于硬扛，异常情况应及时就医|给关系留出自然发展的时间，不催逼承诺|列出“开始前必须具备”的三个条件，逐个补齐',
      '立场冲突已经形成，重点是止争而非争胜|事实、边界和可接受的和解条件|把面子当原则，会让双方代价越来越高|保留证据，引入中立者，不轻率扩大战线|就事论事，停止翻旧账和迫使站队|长期紧张会消耗身心，先离开高压环境|不用输赢语言沟通，先确认关系还有无修复意愿|用一页纸写清事实、诉求、底线和可让步项',
      '需要集中人力处理一项严肃任务|领导是否成熟，纪律是否公平|师出无名或用人不当会造成内耗|明确指挥、分工、责任和收尾机制|遇到家庭大事要统一目标，不宜多头指挥|系统执行治疗或训练计划，不频繁换方案|关系面临共同难题，需要并肩解决而非相互指责|确定一个负责人和统一计划，其他人按角色执行',
      '结盟与亲比能带来支持，但选择很重要|对方是否可信，自己是否也值得信任|迟疑太久可能错过合作，盲目结伴也会被牵累|小范围合作验证人品与能力，再扩大承诺|建立相互支持的分工，避免一人长期付出|找到能陪伴执行好习惯的人，相互提醒|看彼此的价值观与行动是否一致，不只看热情|与关键对象做一次小型合作，用结果检验信任',
      '力量被小幅度约束，适合积少成多|哪些细节正在影响全局|过早放大投入会突破当前承载力|先做流程、客户和现金流的小积累|用小而稳定的照顾改善氛围，不急着解决所有问题|微调作息与饮食，记录变化而非追求猛改|好感在积累，适合稳定联系而不是强行定性|选一个能每天重复的小动作，坚持两周',
      '处于有风险的边界，守礼守序可通过|规则、分寸和对方底线是什么|侥幸试探或出言不慎可能激化风险|遵循流程与权限，每一步都留可回退空间|尊重家人边界，少用“为你好”越代决定|谨慎对待高风险活动，遵循专业指导|靠近时保持礼貌与分寸，不用试探替代坦诚|在行动前确认规则、权限和最坏后果',
      '上下交通，局面顺畅且利于推进|如何借顺势建立可持续的秩序|沉浸顺境、忽略周期变化|推进重点项目，同时建立备份方案|适合和解、分工和共建长期安排|状态较稳时建立长期习惯，不因好转就放纵|沟通顺畅，适合确认共同计划和未解分歧|趁沟通成本最低时，敲定一件拖延已久的重要事',
      '上下不交，信息和资源流动受阻|哪个环节已失去真实联系|硬推、投机或向错误的人妥协|收缩战线，保全核心业务与专业信用|减少无效争论，先维持日常秩序和安全感|处在低谷时不给自己过量任务，必要时求助|关系冷却时不强求立即回应，先看是否仍有诚意|停止一项无效消耗，把时间转回可控的核心事项',
      '公开的共同目标能聚合不同的人|合作是否建立在原则和透明之上|小圈子私利会破坏大范围合作|先统一公开目标和决策规则，再组建团队|家人可以求同存异，共同处理对外事务|加入正向社群或寻找监督伙伴，但不盲从偏方|适合从朋友式的坦诚和共同兴趣发展关系|用一句话写清共同目标，让所有参与者确认',
      '资源与成果充足，课题从获得转向善用|如何公平分配并让资源产生长期价值|炫耀、囤积或把资源当成能力|盘点优势，投向最有复利的能力和人|分享成果并保持规则透明，不用资源控制亲人|状态好时做预防和储备，不透支精力|感情条件不差，重点是真诚分享而非展示实力|列出现有的五项资源，只把一项投到最重要的目标',
      '实力或成果应当向下调节，使关系平衡|是否真实看清自己的位置和不足|表面自谦、实则逃避责任也是偏差|让功不让责，主动听取不同意见|降低姿态倾听，但需担的责任不推卸|尊重身体限度，不用意志力否认疲惫|不抢着证明自己，用倾听了解对方真正需求|主动请一位可信的人指出你忽略的一处问题',
      '情绪和动能被动员，适合预备后行动|热情背后是否有真实资源和统一节奏|乐过忘忧，被气氛推着做过度承诺|可做动员与启动，但先算清人力和成本|创造轻松氛围，同时把之后的分工定清|情绪高涨时注意节制，不用兴奋遮盖不适|吸引力增强，但需分辨真实稳定与一时热烈|把热情落成日程、负责人和预算，再宣布开始',
      '外部形势在变，顺应可通，盲从则失主|跟随的对象和方向是否值得|为了合群放弃原则或频繁换方向|跟随市场与团队节奏，但保留明确判断标准|配合家庭变化，同时说清自己不能让步之处|根据真实反应调整习惯，不追随流行养生法|可顺着对方的节奏了解，但不伪装自己换取认同|为当前方向写下三条继续与退出标准',
      '长期积弊已到必须整治的阶段|能否找到问题根源，不只处理表象|既怪旧人又不建新制度|做根因复盘，设定修复时限和验收标准|处理历史遗留的分工、金钱或照护问题|对拖延的不适做正规评估，不再只靠忍耐|旧伤不处理会反复发作，需要诚实追溯并改变模式|选一个反复发生的问题，用“为什么”连问五次',
      '影响力正在靠近，适合主动关怀和管理|如何让权力与服务相配|以临下的姿态控制他人，或忽略盛势有期|走近一线了解真实情况，及时给资源与指导|主动关心家人需求，避免把照顾变成干涉|开始一项温和、可持续的健康干预并追踪|可以主动靠近和表达，但不用强势换取结果|亲自接触问题现场，听完再决定下一步',
      '需先观察全局和反观自身，行动不宜过早|看到的是事实，还是自己的投射|只旁观不行动，或只看表演不看结构|做访谈、数据和流程观察，暂不急于定方案|观察家庭中谁在沉默承担，再调整分工|记录作息、症状与压力的关联，供专业判断|先看对方持续的行为，不因一次表态下结论|给自己一个观察周期，只记录可验证事实',
      '障碍需要明确咬断，必要时依规则处置|证据是否充分，处置是否比例适当|情绪化惩罚、标准不一或处置过重|把模糊问题转成可核查的违约与整改要求|对反复破坏规则的行为设明确后果|不适不宜只忍耐，应依据事实检查和处理|把不满说具体，划定不可接受的行为边界|定义问题、证据、整改时限和未改的后果',
      '形式与文饰有助于呈现，但只能小幅度推进|外在表达是否服务于真实内容|用包装掩盖结构性问题|适合优化呈现、文档和体验，不以此替代产品实力|用仪式感改善生活，也要处理真实的分工与矛盾|不被外表状态迷惑，实际感受异常就核查|可以打扮和营造浪漫，但真实与承诺更重要|删掉一层多余包装，确认核心内容仍然站得住',
      '结构正在剥落，当下以保全根基为先|什么是不能再损失的核心|在下行阶段冒险扩张或拒绝止损|暂停新投入，清理亏损环节并保留核心人才|面对变动先保住住居、经济与基本信任|状态下滑时及早检查，不靠强撑维持表面|不强留已经失去基础的模式，先保护自己|停止一项持续失血的事，把资源收回核心',
      '最低点出现回转，新动能刚刚萌生|如何保护微弱但真实的好转|急着恢复旧规模，使初生力量夭折|从核心业务或最熟悉的能力重启|给关系一次小而真实的重新开始，不翻旧账|好转后仍循序恢复，不立即过量活动|旧缘或旧问题可能回来，看是否有新的行动|恢复一个曾经有效的好习惯，从最小量开始',
      '局面要求不妄为，以真实与正常秩序应对|动机是否单纯，行动是否合于常理|心存侥幸、制造捷径或把意外当必然|依事实与正规流程办事，不追逐不明利好|坦诚处理误会，不用善意谎言维持和气|对身体信号就事论事，不夸大也不忽视|不算计和操控，把意图直接说出并接受答案|删掉方案中一个依赖侥幸的假设',
      '大量能力和资源正在蓄积，尚需纪律化整合|积累是否已达到可承担大任的程度|只囤积不实践，或未准备好就冒大险|系统学习、储备资源，用真实项目检验能力|把家庭长期资源投向教育、能力和安全基础|通过长期训练建立体能，负荷要逐步增加|关系需要长期了解和信任储备，不急于跳级|把一项蓄积转成可验收的小型实战',
      '输入与养育决定了精神和关系的质量|你在喂养什么，又靠什么滋养自己|贪求外援、口不择言或沉迷低质量输入|管理信息、学习和团队培养，停止无效喂养|关注吃什么、说什么，以及谁在照顾谁|从饮食、睡眠和情绪输入做基础管理|减少消耗性沟通，看双方是否能相互滋养|清理一项低质量输入，补上一项真正滋养你的事',
      '结构承载超量，必须做非常调整|承重点在哪里，谁能承担转型|继续加码会折断，但小修小补也不足|破除瓶颈，必要时改组、砍项目或换承载结构|一人承担过多时必须重分工，不再维持假平衡|身心负荷超限要立即减压并寻求专业支持|关系中的失衡已不能只靠忍让，需要重定结构|删除一项最重负担，并重新分配其余责任',
      '危险或不确定反复出现，需要习得稳定应对|在险中能否保持诚信、专注与正确方法|恐惧乱动或对风险麻木|做风险分级、预案和复盘，不进入无退路的局|家庭遇险先保安全与现金流，再讨论责任|对持续或急性不适谨慎处理，不以卦象代替诊疗|反复的不安要靠事实和稳定行为修复，不靠保证|对最大风险写一份预案：信号、应对、退路',
      '光明需要依附合适载体，辨明可见才能长久|你依附的人、制度或理念是否正当|被外在光芒吸引，或过度曝光消耗自己|适合表达、传播和辨析，但内容要有可靠根据|把隐藏的问题照亮说清，避免公开羞辱家人|注意用眼、兴奋与睡眠平衡，异常就检查|吸引与热情明显，也要确认彼此依赖是否健康|确认当前最重要的一项依附关系，评估它是否可靠',
      '感应与吸引正在发生，贵在真实互动|双方是否互相回应，而非单方投射|只凭感觉忽略现实条件，或刻意操控反应|适合沟通、谈判与建立默契，用反馈修正方式|感受家人没说出的需求，但要直接求证|注意情绪与身体的相互影响，不把感觉当诊断|利于两情相悦，关键是自愿、尊重与持续回应|发出一个清晰且不施压的信号，观察真实回应',
      '长期发展需要稳定原则与可调整的方法|什么应当不变，什么必须随时而变|把固执当坚持，或频繁换方向破坏复利|建立长期节奏和复盘周期，不因短期波动改战略|固定可依靠的分工与沟通仪式，允许具体做法调整|选择可长期维持的习惯，不追求短期极端|感情重在一致行动和长期承诺，不只看一时浓度|定一个八周可执行节奏，每周只复盘一次',
      '小势渐长，主动退让可以保全大局|哪些东西值得保留，退到哪里为止|把退避变成恐惧逃跑，或贪恋当下拒绝离场|暂退高冲突业务，保留人才、信用和再入场条件|冲突升高时拉开距离，但要约定何时重谈|对过劳或高风险环境主动离开，给身体恢复空间|暂时拉开距离看清关系，不用失联惩罚对方|明确退出的范围、保留的核心和重新评估日期',
      '力量强盛，能否正确使用比拥有力量更重要|行动是否合法、有节制且不伤害弱者|恃强凌弱、正面硬碰或高估承载力|可推动难事，但要设制衡与安全边界|有能力者多承担，不用强势压过其他家人|精力好不代表适合极限负荷，防止运动损伤|吸引力和推动力强，不可忽视对方的拒绝|在重大行动前设一个外部审核者和明确止损线',
      '光明向上，成果有机会被看见和承认|如何在获得支持后持续产出真实成果|把曝光当成实力，或因受阻就怀疑自己|主动汇报成果、争取资源，并继续补齐能力|肯定家人进步，用具体支持代替空泛夸奖|恢复期看到进步也按计划继续，不突然加量|关系趋暖，适合积极表达，也要看对方是否持续回应|把最近的一项成果整理成可验证的展示材料',
      '光明受伤或环境不容真实表达，宜内明外晦|如何保住信念与安全，不做无谓牺牲|在不安全处逞强，或长期压抑到失去自我|低调保全核心能力，留存证据和替代机会|家庭低谷中保护弱者，减少公开冲突|在低能量阶段减少刺激并求助，不独自长期熬|受伤时先保护自己，不急于向不安全的人交出全部真心|建立一个保密、可信的支持点，并减少一处曝露风险',
      '内部秩序决定了对外发展的稳定性|角色、责任和言行是否前后一致|家长式控制或规则只约束别人|先理顺内部沟通和权责，再扩大对外承诺|建立清晰、公平、可示范的家庭规则|健康管理需全家环境配合，不只责备个人意志|谈长期关系要看生活分工、责任感和日常一致性|写下当前团队或家庭的角色与责任，修正一处模糊',
      '差异与背离已经显现，小事可求同，大事不强合|哪些分歧可兼容，哪些属于根本冲突|追求表面一致或把不同扩大成敌意|在小范围建立共识，重大决策保留差异方案|允许生活习惯不同，对金钱和照护原则说清|对不同建议求证专业依据，不靠争论选结论|有吸引也有价值差异，先谈可否兼容而非说服|把分歧分成可妥协、需试验、不可妥协三类',
      '前方有险且脚下受阻，转向与求助比硬闯有效|哪条路真正可行，谁能提供关键帮助|将坚持等同于不换路，在错路上继续消耗|停止正面硬攻，调整路线并请高水平者介入|遇到家庭难题寻求外部专业支持，不内部死磕|活动受限时改用更安全方案，不忍痛强行突破|关系卡住时改变沟通场景或求助，不重复旧对话|放弃最受阻的一条路，咨询一位有经验的人再重规划',
      '紧绑开始松解，宜迅速处理遗留问题并恢复秩序|是否已经到了简化、宽免与归位的时机|解困后拖延收尾，或为发泄继续追究|取消临时管制，清理积压事项并恢复正常流程|适合化解误会、释放压力，并约定新的日常规则|危机缓解后仍完成检查与恢复，不立刻透支|若核心矛盾已解，就停止惩罚式冷战，重建轻松互动|今天结清一项积压事项，同时取消一条已无需的临时限制',
      '主动减损次要部分，可换取核心的稳定与诚信|减什么才能真正有益，代价是否公平|穷人情或乱砍核心能力，造成更大亏损|停止低价值项目与重复成本，守住研发和客户信任|适当降低消费和不必要安排，但不减少基本照顾|去掉过度训练、熬夜与刺激，给恢复留空间|放下不必要的控制与要求，保留尊重和真诚|列出三项可减之物，选对核心伤害最小者立即执行',
      '外来增益和发展机会增多，适合行动与改过|增加的资源是否投向真正需要之处|只想获利不愿意承担，或收益不均破坏合作|可扩张有验证的方向，并把增益分配给执行一线|增加对最需要者的支持，不平均用力|把好状态用于建立长期习惯，不得意过度|关系有增进机会，主动付出要用在对方真正需要处|把新增的一份资源立即投入已验证的关键瓶颈',
      '阴滞已逼近上限，需公开决断但不可尚武|要去除的究竟是人，还是不当的行为与机制|泄密、轻敌、暗中处置或把决断变成报复|公开事实和标准，依程序清除不合格环节|对严重越界设明确后果，不私下联合攻击|对危险信号果断就医或停止高风险行为|到了该明确说是或否的时候，不继续暧昧消耗|公开一条决策标准，按它处理一个拖延已久的问题',
      '一个新而强的因素突然进入局面|这次相遇的本质与边界是什么|被新鲜和吸引力压过判断，让小因素迅速扩张|对新合作先隔离风险、小额试行、设退出条款|面对突如其来的人事，先守住家庭核心边界|对突发异常先评估，不被“偶然”麻痹|强烈相遇不等于适合长期，先观察边界感与稳定性|对新机会设一个小额、短期、可退出的试验',
      '人与资源正在聚集，需要共同中心与预防意外|聚集的目的、领导与分配是否正当|人多无主、利益不清或忽视集体风险|明确召集人、共同目标、资源表和风险预案|家庭大事适合召集共商，同时关照不善表达者|群体健康计划可增加坚持，但要尊重个体差异|社交机会增多，分辨真正契合与从众气氛|召开一次有议程的小会，统一目标、分工和风险',
      '循序向上，进展来自长期积累与可靠支持|根基是否稳，是否找到能帮助上升的人|急于跳级、过度谦卑或没有及时争取|持续产出可量化成果，主动向高水平支持者汇报|用稳定鼓励支持家人成长，不拔苗助长|逐步增加训练或恢复量，用记录而非感觉加量|关系适合稳步升温，先建信任再谈更大承诺|设定一个比当前高一级的目标，拆成连续四周的步骤',
      '外在资源困乏，言语难以取信，内在定力尤为重要|如何在困境中保住人、信用与核心能力|空话承诺、自我怀疑或为脱困丧失原则|缩短现金流，用小成果而非口号恢复信任|坦诚说明限制，全家共同保基本生活|将求助视为正常应对，在低谷阶段优先安全|困难会测出关系的承担力，看行动而不只听安慰|今天只保三件事：安全、现金流、核心交付',
      '基础公共资源长期存在，问题在于维护与取用方式|“井”是否清洁、可达，取用工具是否可靠|只换人不修系统，或临门一脚因工具失败|修复基础设施、知识库与核心流程，让资源可复用|建立可持续的家务、照护与资源共享机制|建立稳定的医疗记录与基础习惯，不每次从头来|关系的深层资源需要持续维护，不能只在口渴时索取|检查一项长期依赖的基础资源，修复其最后一米取用问题',
      '变革的时机需由旧秩序的失效与新方案的可信共同证明|为什么变、何时变、凭什么取信|为变而变、时机不对或只破不立|先试点新机制，建立证据和共识后再切换|重大改变需先说明理由和过渡安排，照顾弱者|治疗与习惯改变应基于专业意见，不突然停药换法|关系旧模式已失效时，需重定规则而不只是道歉|写一页变革说明：问题证据、新方案、过渡、验收',
      '新秩序已有容器，接下来是鼎新、养贤与定位|容器是否稳，所养的人和事是否配得上|结构不稳就追求高级成果，或用人失衡|完善治理架构，把资源投给核心人才与高价值产出|把家庭从“应急生存”升级为“培养与传承”|建立成熟、长期、能滋养身心的生活结构|关系适合谈长期定位与共同建设，而不只是感受|确定一个值得长期培养的人或能力，给出固定资源',
      '突发震动打破常态，先定神再恢复职责|真正受影响的是什么，关键事物是否保全|惊慌乱跑、传播谣言或危机过后不复盘|启动应急方案，保核心资产，信息核实后再决策|突发事件中先安抚与保安全，再追责与调整|对急性信号按应急常识处理，不因恐惧拖延|突发信息先求证，不立刻将恐惧变成指责|立即确认人身、数据、现金三项安全，其余稍后决策',
      '该停则停，使思考、位置与行动恢复边界|当前是否已到行动边界，停下后要看什么|把停止变成麻木或逃避，也忌该停不停|冻结高风险操作，做审计和边界检查|暂停激烈对话，约定平静后继续，不私闯空间|身体要求休息时真正停下，不用娱乐性熬夜伪装休息|尊重拒绝与边界，暂停后观察彼此是否更清楚|设一个二十四小时冷静期，期间只记录，不做不可逆决定',
      '事物按合理次序缓慢发展，贵在得位与持续|每一步是否合于阶段，基础是否跟上|跳级、催熟或因进展慢而频繁换方案|按里程碑推进，每升一级先补齐流程与能力|家庭变化给每个人适应时间，不突然要求新角色|恢复、减重或训练都看长期曲线，不追日波动|利于合乎礼序的长期发展，少用短期浓度催进|只设下一个里程碑，完成并站稳后再谈下一级',
      '位置与时序不正，感情或利益推着人进入不利安排|当下角色是否合适，长期结果是否可承受|因急于归属而接受不对等条件|对不正式合作谨慎，先澄清权责、名分和退出条款|不用临时群体压力决定婚恋、金钱或居住大事|不因短期焦虑乱用方法，先得到正规评估|强烈的归属愿望不能替代对等、时机与长期安排|对当前安排做一次权利、责任、期限对等性检查',
      '光与动同时达到高峰，丰盛中已含转衰可能|如何在高峰期完成最重要之事并留下结构|被繁盛遮住视线，过度扩张或恐惧回落|集中优势完成关键交付，同时做人才和现金储备|在条件好时完成重要家庭安排，不铺张透支|精力高峰时完成关键检查，保留回落期的休息量|感情热烈时适合共同创造经历，也要看日常是否可持续|在最佳窗口只完成最重要的一件事，同时留一份储备',
      '身在异乡或临时位置，可小事亨通，不宜高估根基|当地规则、安全与临时边界是什么|因小事滋事、失去资源或把过渡当归宿|低调适应新环境，留好凭证、备份和退路|出行或过渡期保持联系，将住宿、财物与行程说清|在陌生环境优先食品、交通、休息与医疗安全|旅途中的吸引可能真实，但需回到日常条件再判断|为当前过渡期写一张安全清单：证件、财物、联系、退路',
      '以谦顺、渗透和重复的方式深入局面|方向是否清晰，持续影响是否有原则|进退不定、只顺从无主见，或用柔和方式操控|通过沟通、流程和持续优化渗透，方向由成熟者校准|用温和而重复的方式改善家庭习惯，不暗示操纵|适合温和、稳定、长期的调整，进展定期评估|以细腻沟通慢慢靠近，但关键意图要明说|选一个关键方向，用同一个小动作连续影响二十一天',
      '悦乐与交流能连结人，前提是内心真诚与外在有节|言语是否真实，喜悦是否可持续|讨好、空话、过度享乐或用笑脸掩盖冲突|利于谈判、服务与反馈，承诺必须可兑现|营造快乐氛围，也允许家人表达不愉快|注意过度饮食、娱乐与言语刺激，保持节度|利于约会与表白，但不用讨好隐藏真实底线|把一句好听的承诺改成有时间和行动的可兑现约定',
      '离散的状态需要以共同信仰或大目标重新聚合|散开的原因是什么，什么中心真能重聚|只做口号团建，不解决恐惧与利益分散|清除心理和流程隔阂，重建共同目标与信息通道|适合化解隔膜和重聚，但要正面处理各自的恐惧|压力消散后仍需恢复节律，必要时借助专业支持|关系疏离可以重聚，前提是共同意愿与诚实谈隔阂|用一次开放对话找到分散的核心原因和重聚目标',
      '限制与节度能使资源有序，过度苦节则不可持续|限制是否必要、公平、可执行|把自律变成惩罚，或对别人严对自己宽|设预算、时间盒与决策阈值，保留例外处理机制|家庭规则要简明、一致且能说明理由|适度控制饮食、训练与屏幕，不走极端|边界清晰能保护亲密，但不要用规则封闭情感|为当前问题设一个数字化上限和一个可说明的例外',
      '内心诚信能穿透隔阂，甚至支持重大行动|言行是否一致，对方是否能验证你的真实|把自我感动当诚信，或无原则轻信|透明分享信息和动机，用小兑现累积大信任|坦诚说出难言之事，约定可验证的改变|如实记录与陈述情况，不隐瞒或夸大症状|利于深度沟通与建信，信任仍要与边界并存|完成一个曾经答应却未兑现的小承诺',
      '小幅越过常态可以应急，大事不宜冒进，宜下不宜上|哪些小事必须纠偏，哪些大事必须克制|把小成果放大成全面胜利，或追高忽略基层|处理细节、纠错和短期应急，不启动重大扩张|对小问题及时调整，不因小错给家人贴大标签|做温和微调，不以短期激进方法追求大变|适合处理小摩擦和具体习惯，不宜仓促定终身大事|只修正一个最小偏差，七天后再判断是否扩大',
      '格局已完成且各得其位，正因完成才容易从稳定转乱|收尾、交接与维护机制是否完整|庆功过早、忽略小漏洞或在成功后频繁改动|完成验收、文档、交接与监控，减少不必要变更|家庭大事完成后进入维护期，定期检查而不折腾|好转或疗程结束后继续复查与维护，防止反复|关系已确立时把重心从追求确认转向维护日常|做一份收尾清单，特别检查最容易被忽略的小环节',
      '事情尚未完成，要素俱备但位置未定，最后一段尤需谨慎|哪些要素尚未归位，最后一步的风险在哪里|接近成功就放松，或因未完成而否定既有进展|重新排序未完事项，专注交付、验收和切换时点|家庭过渡期将临时安排逐步定型，不在最后关头内讧|恢复尚未结束，按完整疗程与计划走完，不擅自收尾|关系处在定型前，先完成必要沟通和现实检验再下定论|找出“差一点完成”的事，只处理它的最后一个关键风险'
    ];
    
    const INTERPRETATION_FIELDS = ['situation', 'decisionFocus', 'caution', 'career', 'family', 'health', 'love', 'nextStep'];
    if (INTERPRETATION_ROWS.length !== SIXTY_FOUR_GUA.length) {
      throw new Error(`六十四卦解读库数量错误：${INTERPRETATION_ROWS.length}`);
    }
    SIXTY_FOUR_GUA.forEach((hexagram, index) => {
      const values = INTERPRETATION_ROWS[index].split('|');
      hexagram.interpretation = Object.fromEntries(INTERPRETATION_FIELDS.map((field, fieldIndex) => [field, values[fieldIndex]]));
      hexagram.plainInterpretation = `${hexagram.interpretation.situation}。判断重点：${hexagram.interpretation.decisionFocus}。`;
      hexagram.description = hexagram.plainInterpretation;
      hexagram.advice = `${hexagram.interpretation.nextStep}。需防：${hexagram.interpretation.caution}。`;
    });
    
    module.exports = {
      BA_GUA,
      SIXTY_FOUR_GUA
    };
    
  });

  define("../data/tarotData", function (module, exports, require) {
    /**
     * 数据层 - 塔罗牌数据
     * 包含：78张塔罗牌的牌义、牌阵定义等基础数据
     */
    
    // 大阿卡纳（22张）
    const MAJOR_ARCANA = [
      {
        id: 0, name: '愚者', nameEn: 'The Fool',
        meaning: '新的开始，冒险，天真，自由',
        upright: '表示新的开始、冒险精神、乐观态度。您正站在人生的新起点上，充满无限可能。',
        reversed: '可能表示鲁莽行事、缺乏计划、过于天真。建议谨慎思考后再做决定。'
      },
      {
        id: 1, name: '魔术师', nameEn: 'The Magician',
        meaning: '创造力，意志力，行动力，自信',
        upright: '您拥有实现目标所需的所有资源和能力。现在是采取行动的最佳时机。',
        reversed: '可能表示能力未被充分利用，或有欺骗的成分。需要诚实面对自己。'
      },
      {
        id: 2, name: '女祭司', nameEn: 'The High Priestess',
        meaning: '直觉，智慧，神秘，内在知识',
        upright: '相信您的直觉和内在智慧。答案往往隐藏在表面之下，需要静心倾听。',
        reversed: '可能表示忽视了内心的声音，或者被表面的现象所迷惑。'
      },
      {
        id: 3, name: '皇后', nameEn: 'The Empress',
        meaning: '丰饶，母性，自然，创造力',
        upright: '象征着丰收和创造力的爆发。您的努力将会得到丰厚的回报。',
        reversed: '可能表示创造力的阻塞，或者过度依赖他人。'
      },
      {
        id: 4, name: '皇帝', nameEn: 'The Emperor',
        meaning: '权威，稳定，结构，父亲形象',
        upright: '需要建立秩序和规则。您的领导能力和决断力将帮助您克服困难。',
        reversed: '可能表示独裁、僵化或缺乏自律。需要找到平衡。'
      },
      {
        id: 5, name: '教皇', nameEn: 'The Hierophant',
        meaning: '传统，信仰，教育，精神指引',
        upright: '遵循传统和规则会带来好处。寻求导师或有经验的人的建议。',
        reversed: '可能表示打破传统，或者盲目追随而不思考。'
      },
      {
        id: 6, name: '恋人', nameEn: 'The Lovers',
        meaning: '爱情，选择，和谐，价值观',
        upright: '重要的关系或选择即将出现。跟随内心，选择真正符合您价值观的道路。',
        reversed: '可能表示关系中的不和谐，或者错误的选择。'
      },
      {
        id: 7, name: '战车', nameEn: 'The Chariot',
        meaning: '胜利，意志力，控制，决心',
        upright: '通过坚定的意志力和自律，您将克服一切障碍，取得胜利。',
        reversed: '可能表示失控，或者方向不明确。需要重新集中注意力。'
      },
      {
        id: 8, name: '力量', nameEn: 'Strength',
        meaning: '内在力量，勇气，耐心，同情心',
        upright: '用温柔和耐心而非武力来克服困难。您的内在力量比想象中更强大。',
        reversed: '可能表示自我怀疑，或者情绪失控。需要找回内心的平静。'
      },
      {
        id: 9, name: '隐者', nameEn: 'The Hermit',
        meaning: '内省，孤独，寻求真理，指引',
        upright: '需要独处和反思的时间。退后一步，从更高的视角审视问题。',
        reversed: '可能表示过度孤立，或者逃避问题。需要与他人连接。'
      },
      {
        id: 10, name: '命运之轮', nameEn: 'Wheel of Fortune',
        meaning: '命运，变化，周期，好运',
        upright: '命运之轮正在转动，好运即将来临。抓住机会，顺势而为。',
        reversed: '可能表示逆境或不顺。记住，困难只是暂时的，一切都会好转。'
      },
      {
        id: 11, name: '正义', nameEn: 'Justice',
        meaning: '公正，真理，因果，法律',
        upright: '公正和平衡即将到来。您的行为将带来相应的结果，做好事的回报正在路上。',
        reversed: '可能表示不公或逃避责任。需要面对真相，承担应有的责任。'
      },
      {
        id: 12, name: '倒吊人', nameEn: 'The Hanged Man',
        meaning: '牺牲，暂停，新视角，放手',
        upright: '需要换个角度看问题。有时候放手和等待比强行推进更明智。',
        reversed: '可能表示抗拒改变，或者无谓的牺牲。需要重新评估情况。'
      },
      {
        id: 13, name: '死神', nameEn: 'Death',
        meaning: '结束，转变，新生，释放',
        upright: '一个重要的阶段即将结束，为新开始腾出空间。拥抱变化，不要害怕。',
        reversed: '可能表示抗拒结束，或者转变的延迟。需要学会放手。'
      },
      {
        id: 14, name: '节制', nameEn: 'Temperance',
        meaning: '平衡，调和，耐心，中庸',
        upright: '寻求平衡和调和。避免极端，找到中庸之道将带来和谐。',
        reversed: '可能表示失衡，或者过度。需要重新调整生活节奏。'
      },
      {
        id: 15, name: '恶魔', nameEn: 'The Devil',
        meaning: '束缚，欲望，物质主义，诱惑',
        upright: '您可能受到某种束缚或不良习惯的困扰。认识到这些束缚，您就有能力挣脱。',
        reversed: '即将从束缚中解放出来。摆脱依赖，重获自由。'
      },
      {
        id: 16, name: '塔', nameEn: 'The Tower',
        meaning: '突变，启示，解放，崩塌',
        upright: '突然的变化或启示将打破旧有的结构。虽然剧烈，但这将为新的成长铺平道路。',
        reversed: '可能表示避免必要的改变，或者从内而外的缓慢崩塌。'
      },
      {
        id: 17, name: '星星', nameEn: 'The Star',
        meaning: '希望，灵感，宁静，指引',
        upright: '希望和灵感之光照亮前方。保持信念，您的愿望正在显化的路上。',
        reversed: '可能表示失去希望，或者信心动摇。需要重新点燃内心的光芒。'
      },
      {
        id: 18, name: '月亮', nameEn: 'The Moon',
        meaning: '幻觉，恐惧，潜意识，直觉',
        upright: '事情可能不像表面看起来那样。信任直觉，但不要被恐惧和幻觉所左右。',
        reversed: '迷雾即将散去，真相将浮出水面。恐惧正在消退。'
      },
      {
        id: 19, name: '太阳', nameEn: 'The Sun',
        meaning: '快乐，成功，活力，真相',
        upright: '充满阳光和正能量的时期。成功、快乐和活力将伴随您。',
        reversed: '可能表示暂时的阴霾，或者快乐被遮蔽。但太阳总会再次照耀。'
      },
      {
        id: 20, name: '审判', nameEn: 'Judgement',
        meaning: '觉醒，重生，评判，召唤',
        upright: '内心的召唤将引导您走向觉醒。审视过去，迎接新生。',
        reversed: '可能表示自我怀疑，或者逃避内心的召唤。需要倾听真我。'
      },
      {
        id: 21, name: '世界', nameEn: 'The World',
        meaning: '完成，成就，整合，圆满',
        upright: '一个完整的循环即将达成。您的努力将带来圆满和成就。',
        reversed: '可能表示未完成的使命，或者最后的障碍。坚持到最后。'
      }
    ];
    
    // 小阿卡纳（56张，Rider-Waite-Smith 传统牌义摘要）
    const MINOR_ARCANA_SUIT = ['权杖', '圣杯', '宝剑', '星币'];
    const MINOR_ARCANA_ELEMENTS = { '权杖': '火', '圣杯': '水', '宝剑': '风', '星币': '土' };
    const MINOR_ARCANA_MEANINGS = {
      '权杖': '行动、创造、热情、事业',
      '圣杯': '情感、关系、直觉、心灵',
      '宝剑': '思维、挑战、真理、冲突',
      '星币': '物质、财富、身体、实际'
    };
    
    const MINOR_ARCANA_CARDS = {
      '权杖': [
        { number: 1, name: '权杖王牌', nameEn: 'Ace of Wands', meaning: '灵感、创始力、行动火花', upright: '新的热情和创造冲动正在点燃，适合主动开始计划、表达意志并抓住机会。', reversed: '热情受阻或方向不清，可能有延迟、三分钟热度或行动前缺少明确目标。' },
        { number: 2, name: '权杖二', nameEn: 'Two of Wands', meaning: '规划、远景、选择方向', upright: '已经拥有初步成果，正在评估更大的可能；适合制定长远计划并决定下一步。', reversed: '视野受限或害怕走出舒适区，计划可能停留在想象中，需要重新确认方向。' },
        { number: 3, name: '权杖三', nameEn: 'Three of Wands', meaning: '扩展、等待回报、远方机会', upright: '先前的行动开始产生回应，适合扩张合作、等待消息并放眼更大的舞台。', reversed: '进展延迟、合作不稳或预期落空，提醒调整节奏并补足准备。' },
        { number: 4, name: '权杖四', nameEn: 'Four of Wands', meaning: '庆祝、稳定、归属感', upright: '阶段性成果值得庆祝，家庭、团队或关系中出现稳定与支持。', reversed: '表面稳定下仍有不安，庆祝被推迟，或对归属感和承诺有所犹豫。' },
        { number: 5, name: '权杖五', nameEn: 'Five of Wands', meaning: '竞争、摩擦、意见碰撞', upright: '多方力量正在碰撞，竞争虽带来压力，也能激发成长和更清晰的立场。', reversed: '冲突可能被压抑或无谓消耗，适合停止争强好胜，寻找协调方式。' },
        { number: 6, name: '权杖六', nameEn: 'Six of Wands', meaning: '胜利、认可、公开成就', upright: '努力获得看见和肯定，适合展示成果、接受赞赏并继续保持领导姿态。', reversed: '认可不足、骄傲受挫或外界评价不稳，提醒回到真实能力而非掌声。' },
        { number: 7, name: '权杖七', nameEn: 'Seven of Wands', meaning: '防守、坚持、立场考验', upright: '需要捍卫自己的位置和原则，即使压力很大，也有能力守住优势。', reversed: '防守过度或疲于应战，可能因压力放弃立场，需要分辨哪些战斗值得投入。' },
        { number: 8, name: '权杖八', nameEn: 'Eight of Wands', meaning: '速度、消息、快速推进', upright: '事情进入快速流动期，消息、旅行或进展会加速到来，适合顺势推进。', reversed: '延误、沟通混乱或急躁造成偏差，提醒放慢确认细节。' },
        { number: 9, name: '权杖九', nameEn: 'Nine of Wands', meaning: '韧性、防备、最后坚持', upright: '经历考验后仍有力量坚持，适合保持警觉并完成最后一段路。', reversed: '长期紧绷带来疲惫或过度防卫，可能需要休整而不是硬撑。' },
        { number: 10, name: '权杖十', nameEn: 'Ten of Wands', meaning: '负担、责任、过度承担', upright: '责任沉重但接近完成，提醒分配压力，避免把所有事情都扛在自己身上。', reversed: '负担已经超载，适合放下不属于自己的责任，或承认当前方式不可持续。' },
        { number: 11, name: '权杖侍从', nameEn: 'Page of Wands', meaning: '探索、热情、初学者消息', upright: '新的兴趣、消息或冒险邀请出现，适合以好奇心尝试并表达真实热情。', reversed: '想法很多但行动不足，可能冲动、幼稚或缺少持续执行力。' },
        { number: 12, name: '权杖骑士', nameEn: 'Knight of Wands', meaning: '冲劲、冒险、快速行动', upright: '能量强烈，适合主动出击、旅行、转换环境或推进高热情目标。', reversed: '鲁莽、急躁或来得快去得快，提醒控制冲动并避免半途而废。' },
        { number: 13, name: '权杖皇后', nameEn: 'Queen of Wands', meaning: '自信、魅力、创造领导', upright: '自信、温暖和创造力能吸引资源，适合大胆展现个人魅力与影响力。', reversed: '自我怀疑、嫉妒或能量外泄，提醒重新连接内在自信而非依赖外界认可。' },
        { number: 14, name: '权杖国王', nameEn: 'King of Wands', meaning: '愿景、领导、创业精神', upright: '有能力以远见带领局面，适合做决策、开创新局并承担领导责任。', reversed: '控制欲、急躁专断或愿景脱离现实，提醒领导力需要成熟与耐心。' }
      ],
      '圣杯': [
        { number: 1, name: '圣杯王牌', nameEn: 'Ace of Cups', meaning: '情感开启、爱、灵感流动', upright: '心开始打开，新的爱、疗愈、直觉或创作灵感正在涌现。', reversed: '情感受阻或不愿敞开，可能需要先照顾自己的感受与边界。' },
        { number: 2, name: '圣杯二', nameEn: 'Two of Cups', meaning: '互相吸引、和解、伙伴关系', upright: '平等而真诚的连接正在形成，适合合作、告白、修复关系或建立信任。', reversed: '关系失衡、误会或价值不一致，提醒双方需要重新对话。' },
        { number: 3, name: '圣杯三', nameEn: 'Three of Cups', meaning: '友谊、庆祝、支持网络', upright: '朋友、社群或团队带来情感支持，适合庆祝成果并分享喜悦。', reversed: '小圈子压力、过度社交或关系边界混乱，提醒回到真诚连接。' },
        { number: 4, name: '圣杯四', nameEn: 'Four of Cups', meaning: '倦怠、冷淡、重新评估', upright: '对眼前选择感到无感，适合安静审视内心真正需要什么。', reversed: '重新看见机会，愿意从停滞中醒来，开始接受新的情感可能。' },
        { number: 5, name: '圣杯五', nameEn: 'Five of Cups', meaning: '失落、遗憾、仍有希望', upright: '注意力集中在失去与遗憾上，但仍有资源和情感支持尚未被看见。', reversed: '开始从悲伤中恢复，愿意原谅、接受现实并转向剩下的可能。' },
        { number: 6, name: '圣杯六', nameEn: 'Six of Cups', meaning: '回忆、纯真、旧人旧事', upright: '过去的温柔记忆、旧友或童年经验带来安慰，也提醒保持纯粹的心。', reversed: '沉溺过去或理想化回忆，提醒把情感带回当下。' },
        { number: 7, name: '圣杯七', nameEn: 'Seven of Cups', meaning: '幻想、选择、诱惑', upright: '选择很多但真假难辨，适合分清幻想、欲望和真正可执行的道路。', reversed: '迷雾开始散去，适合缩小选择范围，并对一个现实目标做承诺。' },
        { number: 8, name: '圣杯八', nameEn: 'Eight of Cups', meaning: '离开、追寻、更深满足', upright: '虽然已有一些成果，但内心知道需要离开不再滋养自己的处境。', reversed: '迟迟不愿放手，或离开后又回头，提醒诚实面对真正的不满足。' },
        { number: 9, name: '圣杯九', nameEn: 'Nine of Cups', meaning: '满足、愿望实现、享受', upright: '愿望有机会实现，情感与生活层面出现满足感，适合接受自己的成果。', reversed: '外在满足未必填补内心空缺，可能有过度享乐或愿望落空的失衡。' },
        { number: 10, name: '圣杯十', nameEn: 'Ten of Cups', meaning: '圆满、家庭幸福、情感和谐', upright: '情感关系进入和谐圆满的状态，家庭、伴侣或群体支持感强。', reversed: '理想家庭图景与现实有落差，提醒修复沟通，而不是维持表面圆满。' },
        { number: 11, name: '圣杯侍从', nameEn: 'Page of Cups', meaning: '情感消息、想象力、柔软初心', upright: '温柔的消息、创意或心动出现，适合用开放和真诚回应感受。', reversed: '情绪幼稚、逃避现实或表达不成熟，提醒先理解自己的感受。' },
        { number: 12, name: '圣杯骑士', nameEn: 'Knight of Cups', meaning: '浪漫、追求、理想主义', upright: '带着浪漫与理想前进，适合表达爱意、提出邀请或追随艺术灵感。', reversed: '过度理想化、暧昧不清或情绪操控，提醒看见行动而不只听承诺。' },
        { number: 13, name: '圣杯皇后', nameEn: 'Queen of Cups', meaning: '同理心、直觉、情感滋养', upright: '直觉敏锐且富有包容力，适合照顾关系、创作、疗愈或倾听内心。', reversed: '情绪淹没理智，或过度照顾他人而忽略自己，需要健康边界。' },
        { number: 14, name: '圣杯国王', nameEn: 'King of Cups', meaning: '情绪成熟、慈悲、稳定支持', upright: '能以成熟平稳的方式处理情绪，适合调解、支持他人并保持内在安定。', reversed: '情绪压抑、冷处理或操控感受，提醒诚实表达并承担情绪责任。' }
      ],
      '宝剑': [
        { number: 1, name: '宝剑王牌', nameEn: 'Ace of Swords', meaning: '真相、清晰、决断', upright: '新的理解和清晰判断出现，适合说出真相、做决定并切开混乱。', reversed: '思路混乱、沟通不清或真相被遮蔽，提醒先厘清事实再行动。' },
        { number: 2, name: '宝剑二', nameEn: 'Two of Swords', meaning: '僵持、回避、艰难选择', upright: '正在回避一个需要面对的决定，保持平衡有用，但不能永远闭眼不选。', reversed: '僵局开始松动，隐藏信息浮现，也可能因拖延而被迫选择。' },
        { number: 3, name: '宝剑三', nameEn: 'Three of Swords', meaning: '伤心、真相刺痛、释放悲伤', upright: '痛苦的真相或失望浮现，虽然刺痛，却能带来必要的清醒。', reversed: '伤口开始愈合，适合释放旧痛、沟通误会并停止反复伤害自己。' },
        { number: 4, name: '宝剑四', nameEn: 'Four of Swords', meaning: '休息、恢复、沉思', upright: '经历压力后需要暂停，休息、独处和整理思绪比继续硬撑更重要。', reversed: '休息不足或停滞太久，提醒重新调整节奏，慢慢恢复行动。' },
        { number: 5, name: '宝剑五', nameEn: 'Five of Swords', meaning: '冲突、胜之不武、代价', upright: '即使赢了也可能付出关系或信任代价，提醒审视争斗是否值得。', reversed: '冲突后有机会和解，也可能选择退出消耗性的竞争。' },
        { number: 6, name: '宝剑六', nameEn: 'Six of Swords', meaning: '过渡、离开困境、疗愈旅程', upright: '正在从混乱走向平静，过渡虽不轻松，却会带来更安全的岸。', reversed: '抗拒改变或旧问题跟随而来，提醒真正的迁移也需要内在放下。' },
        { number: 7, name: '宝剑七', nameEn: 'Seven of Swords', meaning: '策略、隐瞒、独自行动', upright: '需要策略和谨慎，也要留意隐瞒、逃避责任或信息不透明。', reversed: '秘密可能曝光，或决定停止自欺，适合坦白并修正策略。' },
        { number: 8, name: '宝剑八', nameEn: 'Eight of Swords', meaning: '限制、困住、自我束缚', upright: '感觉被困，但许多限制来自恐惧或旧信念；看清局面就能找到出口。', reversed: '开始挣脱限制，愿意改变想法并重新拿回选择权。' },
        { number: 9, name: '宝剑九', nameEn: 'Nine of Swords', meaning: '焦虑、失眠、内疚', upright: '焦虑和反复思考放大了痛苦，适合寻求支持并把恐惧带回现实检验。', reversed: '噩梦开始减轻，或终于承认压力需要被处理，而不是独自承受。' },
        { number: 10, name: '宝剑十', nameEn: 'Ten of Swords', meaning: '结束、谷底、痛苦收尾', upright: '一个困难阶段已经走到尽头，虽然痛苦，但最坏的时刻正在过去。', reversed: '从谷底恢复，避免继续抓住已结束的东西，给新阶段留下空间。' },
        { number: 11, name: '宝剑侍从', nameEn: 'Page of Swords', meaning: '观察、学习、消息、警觉', upright: '头脑敏锐，适合学习、调查、提问和用新观点看待局面。', reversed: '言语尖锐、消息不实或过度怀疑，提醒先核实再表达。' },
        { number: 12, name: '宝剑骑士', nameEn: 'Knight of Swords', meaning: '快速决断、冲锋、理性进攻', upright: '目标明确、行动迅速，适合突破阻碍，但需要顾及后果。', reversed: '鲁莽争辩、急于证明自己或方向失控，提醒放慢速度。' },
        { number: 13, name: '宝剑皇后', nameEn: 'Queen of Swords', meaning: '清醒、边界、理性洞察', upright: '能够以清晰理智看透真相，适合设立边界、做公正判断并坦率沟通。', reversed: '过度冷硬、批判或因旧伤而防卫，提醒理性之外也保留同理。' },
        { number: 14, name: '宝剑国王', nameEn: 'King of Swords', meaning: '权威判断、原则、专业理性', upright: '适合依据事实、规则和专业判断做决定，保持公正与清晰。', reversed: '权威被滥用、言语压迫或理性变成冷酷，提醒权力必须服务真相。' }
      ],
      '星币': [
        { number: 1, name: '星币王牌', nameEn: 'Ace of Pentacles', meaning: '新机会、资源、现实种子', upright: '现实层面的机会出现，可能是金钱、工作、健康或可落地的新开始。', reversed: '机会尚未落地，可能错失资源、计划不稳或需要重新评估价值。' },
        { number: 2, name: '星币二', nameEn: 'Two of Pentacles', meaning: '平衡、调度、资源管理', upright: '需要在多项责任之间灵活调度，保持节奏和优先级比追求完美更重要。', reversed: '失衡、忙乱或财务压力增加，提醒减少任务并重新安排资源。' },
        { number: 3, name: '星币三', nameEn: 'Three of Pentacles', meaning: '合作、技艺、专业建设', upright: '专业能力和团队合作能带来稳固成果，适合学习、协作和打磨作品。', reversed: '合作不顺、标准不一或能力未被认可，提醒明确分工与质量要求。' },
        { number: 4, name: '星币四', nameEn: 'Four of Pentacles', meaning: '掌控、保守、占有', upright: '重视安全和资源保存是合理的，但过度抓紧可能限制流动。', reversed: '开始松手或因控制不当造成损失，提醒重新理解安全感。' },
        { number: 5, name: '星币五', nameEn: 'Five of Pentacles', meaning: '匮乏、困难、被排除感', upright: '物质或心理上感到匮乏，但支持可能就在附近，需要愿意求助。', reversed: '从困境中恢复，资源和希望重新出现，适合接受帮助并重建稳定。' },
        { number: 6, name: '星币六', nameEn: 'Six of Pentacles', meaning: '给予、接受、公平交换', upright: '资源流动带来平衡，适合给予帮助、接受支持或建立公平交换。', reversed: '施与受不平衡，可能有依赖、控制或不公平分配，需要重订边界。' },
        { number: 7, name: '星币七', nameEn: 'Seven of Pentacles', meaning: '等待成果、评估投入、耐心', upright: '长期投入正在积累，需要耐心评估哪些努力值得继续。', reversed: '投入回报不成比例，可能缺乏耐心或方向错误，适合重新配置资源。' },
        { number: 8, name: '星币八', nameEn: 'Eight of Pentacles', meaning: '练习、专注、精进技艺', upright: '通过重复练习和专注打磨，能力会稳步提升，适合学习和认真工作。', reversed: '敷衍、倦怠或完美主义阻碍进步，提醒找回工匠精神。' },
        { number: 9, name: '星币九', nameEn: 'Nine of Pentacles', meaning: '独立、丰盛、自我价值', upright: '努力带来独立和丰盛，适合享受成果并信任自己的品味与能力。', reversed: '外在丰盛背后可能缺少安全感，或过度依赖物质评价自我价值。' },
        { number: 10, name: '星币十', nameEn: 'Ten of Pentacles', meaning: '家族、传承、长期稳定', upright: '长期稳定、家庭资源或事业传承成形，适合考虑长远安全与共同利益。', reversed: '家庭、金钱或传承结构出现裂缝，提醒处理价值观和资源分配问题。' },
        { number: 11, name: '星币侍从', nameEn: 'Page of Pentacles', meaning: '学习机会、务实开始、目标种子', upright: '适合学习新技能、制定实际计划，并把愿望变成可执行步骤。', reversed: '拖延、缺乏实践或只谈计划不落地，提醒从小步骤开始。' },
        { number: 12, name: '星币骑士', nameEn: 'Knight of Pentacles', meaning: '稳定、责任、长期执行', upright: '踏实、可靠、按部就班会带来成果，适合坚持长期计划。', reversed: '停滞、固执或过度保守，提醒在稳定中加入必要调整。' },
        { number: 13, name: '星币皇后', nameEn: 'Queen of Pentacles', meaning: '滋养、务实照顾、丰盛生活', upright: '能把资源、身体和生活照顾得稳定丰盛，适合经营家庭、事业和健康。', reversed: '过度照顾他人、忽略身体或物质焦虑上升，需要重新滋养自己。' },
        { number: 14, name: '星币国王', nameEn: 'King of Pentacles', meaning: '成就、管理、可靠财富', upright: '成熟的资源管理和责任感带来稳定成功，适合经营事业和长期资产。', reversed: '物质控制欲、贪婪或固守安全区，提醒财富要服务真实价值。' }
      ]
    };
    
    // 牌阵定义
    const SPREADS = {
      '三牌阵': {
        name: '三牌阵',
        nameEn: 'Three Card Spread',
        positions: [
          { name: '过去', meaning: '代表问题的根源或过去的影响' },
          { name: '现在', meaning: '代表当前的状况和挑战' },
          { name: '未来', meaning: '代表可能的发展方向和结果' }
        ],
        cardCount: 3
      },
      '凯尔特十字': {
        name: '凯尔特十字',
        nameEn: 'Celtic Cross',
        positions: [
          { name: '现状', meaning: '当前的核心状况' },
          { name: '挑战', meaning: '面临的障碍或挑战' },
          { name: '基础', meaning: '问题的根基和基础' },
          { name: '过去', meaning: '近期的过去影响' },
          { name: '目标/显意识', meaning: '最好的结果、显意识目标或您正努力靠近的方向' },
          { name: '未来', meaning: '近期的发展方向' },
          { name: '自我', meaning: '您在此情境中的态度' },
          { name: '环境', meaning: '外部环境和他人影响' },
          { name: '希望/恐惧', meaning: '内心的希望或恐惧' },
          { name: '结果', meaning: '最终的结局' }
        ],
        cardCount: 10
      },
      '关系牌阵': {
        name: '关系牌阵',
        nameEn: 'Relationship Spread',
        positions: [
          { name: '您', meaning: '您在关系中的状态' },
          { name: '对方', meaning: '对方在关系中的状态' },
          { name: '关系动力', meaning: '关系中的能量流动' },
          { name: '关系基础', meaning: '关系的基础和根基' },
          { name: '未来走向', meaning: '关系的可能发展方向' }
        ],
        cardCount: 5
      }
    };
    
    // 塔罗分析文案模板
    const TAROT_ANALYSIS_TEMPLATES = [
      '塔罗牌揭示了您内心深处的能量和潜力。请认真思考牌面的信息，它们将为您指引方向。',
      '牌面显示您正处于一个重要的转折点。保持开放的心态，接受即将到来的变化。',
      '这些牌反映了您当前的生命课题。每一个挑战都是成长的机会，每一个祝福都值得感恩。'
    ];
    
    const TAROT_ANALYSIS_DATABASE = {
      contexts: {
        love: {
          label: '感情/关系',
          focus: [
            '关系里的真实需求、情绪回应和双方是否愿意继续投入',
            '亲密关系中的安全感、边界、沟通方式与承诺意愿',
            '吸引力背后的长期相处能力，以及关系是否能从情绪走向信任'
          ],
          opportunity: [
            '如果牌面中出现流动感，适合主动表达感受，而不是等待对方猜测。',
            '关系牌不只看结果，也要看互动模式；能否修复，往往取决于双方是否愿意诚实沟通。',
            '正位较多时可顺势拉近距离，逆位较多时先处理误会和未说出口的不满。'
          ],
          caution: [
            '不要把一时情绪当成最终答案，也不要用沉默测试对方。',
            '若逆位集中在关键牌位，说明关系中有被回避的议题，需要先看见再推进。',
            '过度理想化对方会削弱判断，牌面更建议看行动而不是承诺。'
          ],
          action: [
            '用一次清楚、温和、具体的对话验证关系现状。',
            '先确认自己的底线和期待，再决定要靠近、等待还是抽离。',
            '把注意力放在双方能共同改变的互动模式上。'
          ]
        },
        career: {
          label: '事业/工作',
          focus: [
            '机会质量、个人执行力、组织环境和长期职业定位',
            '当前工作局势中的权力关系、资源条件、风险与可推进路径',
            '你能控制的行动，与外部环境暂时无法改变的部分'
          ],
          opportunity: [
            '如果行动类牌较强，适合把想法落到具体计划，而不是继续观望。',
            '当牌面出现清晰和资源信号时，换工作或推进项目需要同时评估成长空间与稳定性。',
            '正位较多说明外部阻力相对可控，关键在于你是否愿意承担对应责任。'
          ],
          caution: [
            '不要只被短期情绪推动离开，也不要只因安全感而错过成长窗口。',
            '逆位集中时，先排查信息不完整、沟通误差、资源不足或角色定位不清。',
            '如果宝剑或权杖压力过强，容易急于证明自己，需要避免冲动决策。'
          ],
          action: [
            '列出可验证条件：薪资、成长、团队、职责、风险，再做决定。',
            '先获取更多真实信息，比如面试反馈、上级态度或市场机会。',
            '把下一步拆成可执行动作，而不是停在“要不要”的焦虑里。'
          ]
        },
        wealth: {
          label: '财务/资源',
          focus: [
            '现金流、风险承受力、资源配置和投入回报',
            '金钱背后的安全感需求，以及是否有清晰的边界和计划',
            '短期收益与长期稳定之间的平衡'
          ],
          opportunity: [
            '星币能量强时，适合用务实计划积累成果，而不是追求快速翻倍。',
            '若牌面显示资源流动，适合优化预算、谈合作或重估投入产出。',
            '正位较多时可以稳步推进，但仍要保留风险缓冲。'
          ],
          caution: [
            '逆位较多时不宜被贪心或焦虑驱动，尤其要避免信息不透明的投资。',
            '资源类问题最怕忽略细节，合同、成本和时间都需要重新核对。',
            '如果情绪牌过强，说明财务判断可能受安全感或关系压力影响。'
          ],
          action: [
            '先做风险上限，再谈收益目标。',
            '把资源分成必需、储备、成长和尝试四类处理。',
            '对每个投入设定退出条件，避免沉没成本拖住判断。'
          ]
        },
        study: {
          label: '学习/考试',
          focus: [
            '学习方法、专注力、基础积累和临场发挥',
            '目标是否清晰，以及当前准备是否匹配目标难度',
            '知识吸收、节奏管理和反馈修正'
          ],
          opportunity: [
            '星币和宝剑能量强时，适合通过系统训练和复盘提升结果。',
            '如果牌面有启动信号，说明现在需要开始行动，不要继续等待完美状态。',
            '正位较多时，稳定计划比临时冲刺更有价值。'
          ],
          caution: [
            '逆位较多可能代表方法失衡、焦虑过强或计划过满。',
            '不要把努力感误认为有效学习，牌面更重视反馈和修正。',
            '若圣杯压力明显，情绪会影响吸收，需要先恢复稳定节奏。'
          ],
          action: [
            '把目标拆成每日可检查的输入和输出。',
            '用错题、复述、模拟测试验证真实掌握程度。',
            '减少无效焦虑，把注意力放回下一次可改进的动作。'
          ]
        },
        health: {
          label: '身心状态',
          focus: [
            '能量消耗、压力来源、恢复节奏和身心边界',
            '身体信号与情绪状态之间的互相影响',
            '是否需要降低负荷、寻求支持或重新安排生活节奏'
          ],
          opportunity: [
            '如果牌面有恢复信号，适合建立稳定作息和温和的照顾计划。',
            '身心问题不适合硬扛，牌面更强调持续恢复而非短期爆发。',
            '正位较多时可逐步恢复主动权，但仍要尊重身体反馈。'
          ],
          caution: [
            '逆位较多时说明压力可能被压抑或长期累积，需要认真对待。',
            '不要用意志力覆盖身体信号；必要时应寻求专业帮助。',
            '如果宝剑压力明显，反复思虑可能放大不适感。'
          ],
          action: [
            '先降低消耗，再安排恢复。',
            '记录睡眠、情绪、饮食和压力触发点，找出真正模式。',
            '把求助视为策略，而不是失败。'
          ]
        },
        general: {
          label: '综合议题',
          focus: [
            '当前局面的核心能量、可选路径和需要面对的阻力',
            '事情从哪里来、现在卡在哪里、下一步该怎样更清醒地行动',
            '内在状态与外部条件之间的关系'
          ],
          opportunity: [
            '牌面会先显示能量结构，再显示行动方向；不要急着只问结果。',
            '如果正位较多，可以顺势推进，同时保留复盘空间。',
            '当首尾牌呼应时，说明议题有清晰的起点和可观察的发展方向。'
          ],
          caution: [
            '逆位较多时，不代表一定失败，而是提醒阻力、延迟或内在卡点需要先处理。',
            '不要把牌面当作替你决定的工具，它更适合帮助你看清局面。',
            '如果元素过度集中，说明视角可能偏向某一面，需要补足缺失维度。'
          ],
          action: [
            '先做一个小而明确的下一步，观察现实反馈。',
            '区分事实、情绪和想象，再决定行动。',
            '把牌面提示转成可执行清单，而不是停在感受上。'
          ]
        }
      },
      spreads: {
        '三牌阵': '三牌阵适合看趋势线：第一张说明源头，第二张指出当下核心，第三张提示最可能的发展。',
        '关系牌阵': '关系牌阵需要同时看双方状态和中间动力，不能只把未来走向当作单方面答案。',
        '凯尔特十字': '凯尔特十字信息量较大，重点看现状、挑战、基础、未来与结果之间是否互相支持或互相牵制。'
      },
      elementThemes: {
        '火': '行动、欲望、创造力和推进速度',
        '水': '情绪、关系、直觉和内在需求',
        '风': '思考、沟通、判断和冲突处理',
        '土': '资源、现实条件、身体和长期稳定'
      },
      arcanaStructure: {
        majorHeavy: '大阿卡纳比例高，说明这不是单纯日常选择，而是牵涉价值观、阶段转变或长期课题。',
        minorHeavy: '小阿卡纳比例高，说明重点在具体行动、现实条件和日常选择，可通过调整方法改变走势。',
        courtHeavy: '宫廷牌较多，说明人物、角色定位或人际互动会强烈影响结果。',
        acePresent: '王牌出现，说明有新开端、新资源或新方向正在进入局面。'
      },
      reversalPatterns: {
        none: '没有逆位，牌面阻力较少，但仍要避免把顺势误读成不用行动。',
        light: '少量逆位提示局部阻塞，重点是修正方法，而不是否定整件事。',
        heavy: '逆位较多，说明内耗、延迟或未解决的问题会明显影响推进，需要先处理卡点。'
      },
      // 下面的语料按“句首 × 牌位 × 朝向 × 元素 × 收束”组合，避免整段套用固定模板。
      // 即使抽到相同的牌，不同问题、牌阵和位置也会形成明显不同的叙述。
      positionOpeners: [
        '落在「{position}」的{card}{orientation}，把视线带向',
        '当{card}以{orientation}出现在「{position}」，它首先照见',
        '「{position}」由{card}{orientation}占据，这一幕强调',
        '在牌阵的「{position}」处，{card}{orientation}更像一面镜子，映出',
        '{card}{orientation}停在「{position}」，这里值得细读的是',
        '从「{position}」这个角度看，{card}{orientation}正在谈论',
        '牌面把{card}{orientation}放进「{position}」，意在提醒你关注',
        '「{position}」位置翻出{card}{orientation}，当前主题落在'
      ],
      positionBridges: [
        '结合这个位置所代表的“{positionMeaning}”，',
        '由于此处掌管“{positionMeaning}”，',
        '把牌义放回“{positionMeaning}”这一层，',
        '此牌需要与“{positionMeaning}”一起理解：',
        '在“{positionMeaning}”的语境下，',
        '若把焦点对准“{positionMeaning}”，'
      ],
      orientationVoices: {
        upright: [
          '能量较为外显，事情有机会通过行动被看见。',
          '它倾向于直接表达自身力量，适合顺势但不宜省略判断。',
          '这股力量正在现实层面展开，关键是给它一个清楚出口。',
          '牌意运行得相对通畅，已有条件比想象中更可用。',
          '正位并不等于自动成功，而是说明主动权仍在你手里。',
          '目前更适合建设、回应与推进，而非继续等待确定感。'
        ],
        reversed: [
          '能量可能转向内在、延迟显现，或以不够成熟的方式表达。',
          '这里的阻力更像需要校准的信号，而不是简单的否定答案。',
          '牌意出现卡顿，先处理内耗与误读，外部局面才容易松动。',
          '它提醒你检查过度、匮乏或压抑，看看力量究竟堵在哪里。',
          '逆位把问题拉回内部：真正需要改变的也许是反应方式。',
          '此刻不宜强推，修正节奏、边界或信息差会更有效。'
        ]
      },
      contextBridges: [
        '放到{context}议题中，牌面将重点落在：{focus}。',
        '对应你关心的{context}，更实际的观察维度是：{focus}。',
        '这对{context}问题的启发是，不妨先从这里入手：{focus}。',
        '若回到{context}的现实处境，牌面给出的阅读方向是：{focus}。',
        '在{context}层面，值得单独检视的一项是：{focus}。',
        '因此，判断这件事时还应纳入以下考量：{focus}。'
      ],
      analysisOpeners: [
        '这组牌没有急着给出“是或否”，而是在描绘问题如何发展。',
        '牌阵呈现的不是静止结论，而是一条仍可被选择改变的路径。',
        '把牌面连起来看，真正突出的并非吉凶，而是局势的运行方式。',
        '这次抽牌像一张局势剖面图：动力、阻力与可用资源同时出现。',
        '牌与牌之间形成了一段叙事，起因、当下和后续彼此牵动。',
        '本次牌阵的价值在于揭开表象之下的动力，而不是替你预设命运。',
        '眼前的组合显示，答案藏在过程的转折里，不只落在最后一张牌上。',
        '这是一组需要整体阅读的牌：单张的明暗会被相邻位置重新解释。'
      ],
      summaryLeads: [
        '牌阵依次展开为', '位置之间的叙事是', '从牌面顺序可见', '这条能量线由此铺开',
        '逐一查看各个位置', '整个结构可以概括为', '牌阵给出的关键节点包括', '把各位置串联起来'
      ],
      elementVariants: {
        '火': [
          '火元素居多，局面靠行动、胆量和创造欲升温，但速度过快也会烧掉耐心。',
          '权杖的火成为主旋律，重点是怎样把冲劲变成持续执行，而非一阵热度。',
          '火能量抬高了主动性；越想快速破局，越要先确认方向是否值得。'
        ],
        '水': [
          '水元素占据主导，情绪、直觉和关系回应比表面事实更影响决定。',
          '圣杯的水贯穿牌阵，真正的转折往往发生在感受被承认、被表达之后。',
          '水能量让局面变得细腻，也容易模糊边界；共情与清醒需要同时存在。'
        ],
        '风': [
          '风元素最活跃，信息、判断和沟通方式将决定事情往哪里转弯。',
          '宝剑的风切入核心，眼下需要的是事实与清晰，而不是反复猜测。',
          '风能量带来洞察，也可能放大焦虑；把想法落到证据上尤其重要。'
        ],
        '土': [
          '土元素最扎实，资源、时间、身体感受和可持续性是判断的地基。',
          '星币的土托住牌阵，答案要经得起成本、节奏与长期价值的检验。',
          '土能量要求耐心建设；缓慢并不等于停滞，稳定积累本身就是进展。'
        ],
        '大阿卡纳': [
          '大阿卡纳主导局面，这更像一次价值观或人生阶段的校准。',
          '牌阵由原型力量领衔，眼前选择可能牵动比日常得失更深的课题。',
          '主导能量来自大阿卡纳，适合从长期身份与成长方向重新理解问题。'
        ]
      },
      structureVariants: {
        majorHeavy: [
          '大牌密度较高，局面牵涉阶段转变、核心价值或难以回避的成长课题。',
          '多张大阿卡纳把问题推向更长的时间尺度，短期技巧未必足以解决根本矛盾。',
          '原型牌占主导，说明这次经历可能改变你理解自己或世界的方式。'
        ],
        minorHeavy: [
          '小牌居多，走势仍掌握在日常选择、沟通细节和执行方法里。',
          '现实牌占多数，问题并非不可撼动，调整具体做法就可能改变后续。',
          '牌面落在生活层面，真正有效的转机来自连续的小动作。'
        ],
        courtHeavy: [
          '宫廷牌聚集，人物性格、身份角色与互动边界会成为关键变量。',
          '多张人物牌出现，既要看他人的态度，也要看你正以哪一种角色回应。',
          '宫廷能量偏强，成熟度、责任分配和谁拥有话语权值得细查。'
        ],
        acePresent: [
          '王牌带来一颗新种子，但它需要明确承诺和后续照料才能长成结果。',
          '牌阵中有王牌开门，新机会已经露头，下一步在于是否愿意接住。',
          '初始能量进入局面，先小规模试行比等待万事俱备更合适。'
        ]
      },
      reversalVariants: {
        none: [
          '全为正位让能量表达较直接，不过顺畅仍需行动承接。',
          '没有逆位并非一路无阻，而是多数问题能够被清楚看见并主动处理。',
          '牌面方向一致，适合推进，同时给乐观判断保留现实校验。'
        ],
        light: [
          '少量逆位像局部路标，指出最值得优先修正的环节。',
          '正位仍占上风，阻力更接近方法或时机问题，而非整体否定。',
          '局部能量回缩，若先疏通卡点，其余牌意会更容易发挥。'
        ],
        heavy: [
          '逆位密集表示能量多向内纠缠，先减轻内耗比强求结果重要。',
          '阻塞信号集中出现，可能需要重订节奏、边界或目标本身。',
          '多张逆位要求暂停自动反应；看见反复模式，就是改变走势的入口。'
        ]
      },
      trajectoryBridges: [
        '开端由{first}定调，最后的{last}则把问题带向新的落点。',
        '{first}揭示最初动力，{last}说明这股力量若延续下去会如何收束。',
        '从{first}走到{last}，可以看到局势正经历一次重心迁移。',
        '首牌{first}与尾牌{last}形成呼应，前者谈起点，后者谈可能抵达之处。',
        '牌阵从{first}启程，在{last}处留下结果线索，中间位置就是可调整的过程。',
        '{first}打开议题，{last}负责收尾；两者之间的距离正是你的行动空间。'
      ],
      suggestionOpeners: [
        '此刻最有帮助的做法是', '把牌面落到现实，可以先', '比起追问确定答案，更建议你',
        '接下来的一小步，不妨是', '若要主动改变走势，可以', '这组牌给出的行动锚点是',
        '真正能握在手里的部分，是', '未来几天可以尝试'
      ],
      suggestionClosers: [
        '先观察一次真实反馈，再决定是否加码。',
        '给行动设一个复盘日期，避免无限等待或仓促定论。',
        '保留调整余地，新的信息出现时允许自己改变答案。',
        '不必一次解决全部，只要先让最卡住的环节开始流动。',
        '把直觉写下来，再用事实、时间和对方的行动进行验证。',
        '选择应当让你更清醒、更完整，而不只是暂时摆脱焦虑。'
      ]
    };
    
    module.exports = {
      MAJOR_ARCANA,
      MINOR_ARCANA_SUIT,
      MINOR_ARCANA_ELEMENTS,
      MINOR_ARCANA_MEANINGS,
      MINOR_ARCANA_CARDS,
      SPREADS,
      TAROT_ANALYSIS_TEMPLATES,
      TAROT_ANALYSIS_DATABASE
    };
    
  });

  define("core/liuyaoEngine", function (module, exports, require) {
    /**
     * 核心层 - 六爻计算引擎
     * 负责：随机生成六爻卦象、变卦分析、卦辞解读等核心算法
     */
    
    const { BA_GUA, SIXTY_FOUR_GUA } = require('../data/hexagramData');
    
    class LiuyaoEngine {
      /**
       * 抛掷三枚硬币，得到一个爻
       * 3正=老阳(9,变爻)，2正1反=少阴(8)，1正2反=少阳(7)，3反=老阴(6,变爻)
       * @returns {Object} {value, type, line}
       */
      static tossCoins() {
        // 模拟三枚硬币，正面为3，反面为2
        const coins = [
          Math.random() < 0.5 ? 3 : 2,
          Math.random() < 0.5 ? 3 : 2,
          Math.random() < 0.5 ? 3 : 2
        ];
        const sum = coins.reduce((a, b) => a + b, 0);
    
        let value, type, line;
        if (sum === 9) { // 老阳
          value = 9; type = '老阳'; line = 1; // 阳爻，变阴
        } else if (sum === 8) { // 少阴
          value = 8; type = '少阴'; line = 0; // 阴爻，不变
        } else if (sum === 7) { // 少阳
          value = 7; type = '少阳'; line = 1; // 阳爻，不变
        } else { // 老阴
          value = 6; type = '老阴'; line = 0; // 阴爻，变阳
        }
    
        return { value, type, line };
      }
    
      /**
       * 生成六爻卦象（从初爻到上爻）
       * @returns {Object} {yaoArray, changingLines}
       */
      static generateHexagram() {
        const yaoArray = [];
        const changingLines = [];
    
        for (let i = 0; i < 6; i++) {
          const yao = this.tossCoins();
          yaoArray.push(yao);
          if (yao.type === '老阳' || yao.type === '老阴') {
            changingLines.push({ position: i + 1, ...yao });
          }
        }
    
        return { yaoArray, changingLines };
      }
    
      /**
       * 将六爻转换为卦象（下卦3爻 + 上卦3爻）
       * @param {Array} yaoArray - 六爻数组
       * @returns {Object} {lowerGua, upperGua, hexagram}
       */
      static parseHexagram(yaoArray) {
        // 下卦（初爻、二爻、三爻）
        const lowerLines = [yaoArray[0].line, yaoArray[1].line, yaoArray[2].line];
        // 上卦（四爻、五爻、上爻）
        const upperLines = [yaoArray[3].line, yaoArray[4].line, yaoArray[5].line];
    
        // 查找对应的八卦
        const lowerGua = BA_GUA.find(g => 
          g.lines[0] === lowerLines[0] && g.lines[1] === lowerLines[1] && g.lines[2] === lowerLines[2]
        );
        const upperGua = BA_GUA.find(g => 
          g.lines[0] === upperLines[0] && g.lines[1] === upperLines[1] && g.lines[2] === upperLines[2]
        );
    
        // 查找六十四卦
        const hexagram = SIXTY_FOUR_GUA.find(g => 
          g.lower === lowerGua.name && g.upper === upperGua.name
        );
    
        return { lowerGua, upperGua, hexagram };
      }
    
      /**
       * 计算变卦
       * @param {Array} yaoArray - 六爻数组
       * @returns {Object} 变卦信息
       */
      static calcChangingHexagram(yaoArray) {
        const changedYao = yaoArray.map(yao => {
          const line = yao.type === '老阳' ? 0 : (yao.type === '老阴' ? 1 : yao.line);
          return { value: line === 1 ? 7 : 8, type: line === 1 ? '少阳' : '少阴', line };
        });
        return { ...this.parseHexagram(changedYao), yaoArray: changedYao };
      }
    
      /**
       * 生成爻象文本表示
       * @param {Array} yaoArray - 六爻数组
       * @returns {string} 爻象文本
       */
      static generateYaoText(yaoArray) {
        // 从下往上显示
        const lines = [];
        for (let i = 5; i >= 0; i--) {
          const yao = yaoArray[i];
          if (yao.type === '老阳') {
            lines.push('━━━○'); // 老阳，阳爻变
          } else if (yao.type === '老阴') {
            lines.push('━ ━×'); // 老阴，阴爻变
          } else if (yao.line === 1) {
            lines.push('━━━'); // 少阳
          } else {
            lines.push('━ ━'); // 少阴
          }
        }
        return lines.join('\n');
      }
    
      static buildCopyText(question, gender, date, topic, yaoArray, hexagram, lowerGua, upperGua, changedHexagram) {
        const positionNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];
        const lineText = yaoArray.map((yao, index) => {
          const symbol = yao.line === 1 ? '━━━' : '━ ━';
          const moving = yao.type === '老阳' || yao.type === '老阴' ? '（动爻）' : '（静爻）';
          return `${positionNames[index]}：${symbol} ${yao.type} ${yao.value}${moving}`;
        }).reverse();
        const movingLines = yaoArray
          .map((yao, index) => (yao.type === '老阳' || yao.type === '老阴') ? positionNames[index] : '')
          .filter(Boolean);
    
        return [
          '【六爻排盘原始结果】',
          `所问：${question}`,
          `性别：${gender}`,
          `起卦时间：${date}`,
          `所问方向：${topic}`,
          '起卦方式：三枚铜钱法',
          `本卦：${hexagram ? `${hexagram.name}${hexagram.symbol}` : '未知卦'}（上${upperGua ? upperGua.name : '未知'}、下${lowerGua ? lowerGua.name : '未知'}）`,
          '六爻（自上而下）：',
          ...lineText,
          `动爻：${movingLines.length ? movingLines.join('、') : '无'}`,
          `变卦：${changedHexagram ? `${changedHexagram.name}${changedHexagram.symbol}` : '未知卦'}`,
          '',
          '请仅依据以上原始排盘进行解读。'
        ].join('\n');
      }
    
      static buildTopicGuidance(hexagram, changedHexagram, topic) {
        const selectedTopic = ['事业', '家庭', '健康', '感情'].includes(topic) ? topic : '事业';
        const topicField = { '事业': 'career', '家庭': 'family', '健康': 'health', '感情': 'love' }[selectedTopic];
        const interpretation = hexagram.interpretation;
        const transition = changedHexagram && changedHexagram.id !== hexagram.id
          ? `变卦「${changedHexagram.name}」显示后续局势转为：${changedHexagram.interpretation.situation}。`
          : '本次无实质变卦，当前课题仍会延续，不宜自行假定已经转机。';
        return {
          topic: selectedTopic,
          analysis: `${interpretation[topicField]}。此卦的判断重点是：${interpretation.decisionFocus}。${transition}`,
          suggestion: `${interpretation.nextStep}。需特别防范：${interpretation.caution}。`
        };
      }
    
      static interpretMovingLine(hexagram, changingLine) {
        const phases = [
          '初爻主事之初端，变化刚露苗头',
          '二爻主内在中位，重在打基础与得到配合',
          '三爻处下卦之终，常是进退压力最明显之处',
          '四爻刚入上卦，意味着从内部准备走向外部行动',
          '五爻居主位，重在决策、担当与掌握分寸',
          '上爻主事之穷极，需考虑收尾、退转与防止过度'
        ];
        const change = changingLine.type === '老阳'
          ? '阳爻转阴，力量应从推进转向收敛'
          : '阴爻转阳，力量应从承受转向行动';
        const classic = hexagram.yaoLines.find(line => line.position === changingLine.position);
        const classicText = classic
          ? `${classic.title}「${classic.original}」《象》曰：${classic.xiang}`
          : `第${changingLine.position}爻`;
        return `${classicText}\n${phases[changingLine.position - 1]}；${change}。结合「${hexagram.name}」，此处应聚焦“${hexagram.interpretation.decisionFocus}”，并防止“${hexagram.interpretation.caution}”。`;
      }
    
      /**
       * 执行六爻占卜
       * @param {string} question - 问题
       * @param {string} gender - 性别
       * @param {string} date - 测算日期
       * @param {string} topic - 分析模块：事业、家庭、健康或感情
       * @returns {Object} 占卜结果
       */
      static divinate(question, gender, date, topic = '事业') {
        const { yaoArray, changingLines } = this.generateHexagram();
        const { lowerGua, upperGua, hexagram } = this.parseHexagram(yaoArray);
        const changingHexagram = this.calcChangingHexagram(yaoArray);
        const changedHexagram = changingHexagram.hexagram || hexagram;
        const topicGuidance = this.buildTopicGuidance(hexagram, changedHexagram, topic);
        const copyText = this.buildCopyText(
          question, gender, date, topicGuidance.topic, yaoArray,
          hexagram, lowerGua, upperGua, changedHexagram
        );
    
        // 生成变爻分析
        let changingAnalysis = '';
        if (changingLines.length > 0) {
          const lineAnalyses = changingLines.map(cl => {
            return `第${cl.position}爻：${this.interpretMovingLine(hexagram, cl)}`;
          });
          const specialLine = hexagram.yaoLines.find(line => line.position === 7);
          if (changingLines.length === 6 && specialLine) {
            lineAnalyses.push(`六爻皆变，参用爻：${specialLine.title}「${specialLine.original}」《象》曰：${specialLine.xiang}`);
          }
          changingAnalysis = lineAnalyses.join('\n');
          if (changingHexagram.hexagram) {
            changingAnalysis += `\n\n变卦为「${changingHexagram.hexagram.name}」，象征事物将向「${changingHexagram.hexagram.meaning}」的方向发展。`;
          }
        } else {
          changingAnalysis = '六爻皆不变，表示事情发展平稳，按当前趋势进行即可。';
        }
    
        // 生成卦象文本
        const yaoText = this.generateYaoText(yaoArray);
    
        return {
          question,
          gender,
          date,
          topic: topicGuidance.topic,
          hexagram: hexagram ? hexagram.name : '未知卦',
          hexagramSymbol: hexagram ? hexagram.symbol : '',
          hexagramMeaning: hexagram ? hexagram.meaning : '',
          description: hexagram ? hexagram.description : '',
          guaCi: hexagram ? hexagram.guaCi : '',
          xiangCi: hexagram ? hexagram.xiangCi : '',
          plainInterpretation: hexagram ? hexagram.plainInterpretation : '',
          fortune: hexagram ? hexagram.fortune : '中平',
          yaoText,
          lowerGua: lowerGua ? lowerGua.name : '',
          upperGua: upperGua ? upperGua.name : '',
          changingLinesCount: changingLines.length,
          changingHexagram: changedHexagram ? changedHexagram.name : '未知卦',
          changingHexagramSymbol: changedHexagram ? changedHexagram.symbol : '',
          changingHexagramMeaning: changedHexagram ? changedHexagram.meaning : '',
          changingGuaCi: changedHexagram ? changedHexagram.guaCi : '',
          changingXiangCi: changedHexagram ? changedHexagram.xiangCi : '',
          changingPlainInterpretation: changedHexagram ? changedHexagram.plainInterpretation : '',
          changingYaoText: this.generateYaoText(changingHexagram.yaoArray),
          copyText,
          changingAnalysis,
          analysis: hexagram ? hexagram.advice : '请诚心想事，卦象自会显现。',
          topicAnalysis: topicGuidance.analysis,
          suggestion: topicGuidance.suggestion
        };
      }
    }
    
    module.exports = LiuyaoEngine;
    
  });

  define("core/tarotEngine", function (module, exports, require) {
    /**
     * 核心层 - 塔罗占卜引擎
     * 负责：随机抽牌、牌阵布局、牌义解读等核心算法
     */
    
    const {
      MAJOR_ARCANA, MINOR_ARCANA_SUIT, MINOR_ARCANA_ELEMENTS,
      MINOR_ARCANA_MEANINGS, MINOR_ARCANA_CARDS, SPREADS, TAROT_ANALYSIS_DATABASE
    } = require('../data/tarotData');
    
    class TarotEngine {
      static majorImageKey(id) {
        return `ar${String(id).padStart(2, '0')}.jpg`;
      }
    
      static minorImageKey(suit, number) {
        const suitCodes = { '权杖': 'wa', '圣杯': 'cu', '宝剑': 'sw', '星币': 'pe' };
        const rankCodes = { 1: 'ac', 11: 'pa', 12: 'kn', 13: 'qu', 14: 'ki' };
        const rank = rankCodes[number] || String(number).padStart(2, '0');
        return `${suitCodes[suit]}${rank}.jpg`;
      }
    
      /**
       * 生成小阿卡纳单张牌数据
       * @param {string} suit - 花色
       * @param {number} number - 牌号(1-14, 11-14为宫廷牌)
       * @returns {Object} 牌数据
       */
      static generateMinorArcanaCard(suit, number) {
        const cardData = MINOR_ARCANA_CARDS[suit]?.find(card => card.number === number);
        if (!cardData) {
          throw new Error(`Missing minor arcana data for ${suit} ${number}`);
        }
        const element = MINOR_ARCANA_ELEMENTS[suit];
    
        return {
          id: 100 + MINOR_ARCANA_SUIT.indexOf(suit) * 14 + number - 1,
          name: cardData.name,
          nameEn: cardData.nameEn,
          suit,
          element,
          number,
          imageKey: this.minorImageKey(suit, number),
          meaning: `${cardData.meaning}；${MINOR_ARCANA_MEANINGS[suit]}`,
          upright: cardData.upright,
          reversed: cardData.reversed
        };
      }
    
      /**
       * 生成一副完整的78张塔罗牌
       * @returns {Array} 完整牌组
       */
      static generateFullDeck() {
        const deck = MAJOR_ARCANA.map(card => ({
          ...card,
          imageKey: this.majorImageKey(card.id)
        }));
        MINOR_ARCANA_SUIT.forEach(suit => {
          for (let i = 1; i <= 14; i++) {
            deck.push(this.generateMinorArcanaCard(suit, i));
          }
        });
        return deck;
      }
    
      /**
       * 洗牌算法（Fisher-Yates）
       * @param {Array} deck - 牌组
       * @returns {Array} 洗牌后的牌组
       */
      static shuffle(deck) {
        const shuffled = [...deck];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }
    
      /**
       * 抽取指定数量的牌
       * @param {number} count - 抽取数量
       * @returns {Array} 抽到的牌
       */
      static drawCards(count) {
        const deck = this.shuffle(this.generateFullDeck());
        const drawn = [];
        for (let i = 0; i < count; i++) {
          const isReversed = Math.random() < 0.15; // 15%概率逆位
          drawn.push({
            ...deck[i],
            isReversed,
            interpretation: isReversed ? deck[i].reversed : deck[i].upright
          });
        }
        return drawn;
      }
    
      static questionContexts() {
        return {
          love: {
            label: '感情/关系',
            keywords: ['感情', '爱情', '恋爱', '复合', '分手', '婚姻', '伴侣', '喜欢', '爱', '关系', '对方'],
            focus: '关注彼此的真实感受、互动模式、边界与承诺'
          },
          career: {
            label: '事业/工作',
            keywords: ['工作', '事业', '职业', '跳槽', '换工作', '升职', '项目', '创业', '老板', '同事', 'offer', '面试'],
            focus: '关注机会、执行力、团队环境、职业定位与长期发展'
          },
          wealth: {
            label: '财务/资源',
            keywords: ['钱', '财', '收入', '投资', '理财', '生意', '赚钱', '亏损', '资产', '预算'],
            focus: '关注资源流动、风险控制、投入回报与安全感'
          },
          study: {
            label: '学习/考试',
            keywords: ['学习', '考试', '读书', '课程', '学校', '考研', '证书', '成绩', '申请'],
            focus: '关注专注度、方法、准备程度与知识吸收'
          },
          health: {
            label: '身心状态',
            keywords: ['健康', '身体', '病', '压力', '焦虑', '睡眠', '恢复', '情绪'],
            focus: '关注能量消耗、恢复节奏、压力来源与自我照顾'
          },
          general: {
            label: '综合议题',
            keywords: [],
            focus: '关注当前局面的核心能量、可选择路径与需要留意的阻力'
          }
        };
      }
    
      static classifyQuestion(question = '') {
        const contexts = this.questionContexts();
        const normalized = String(question).toLowerCase();
        const orderedTypes = ['love', 'career', 'wealth', 'study', 'health'];
        const type = orderedTypes.find(contextType =>
          contexts[contextType].keywords.some(keyword => normalized.includes(keyword.toLowerCase()))
        ) || 'general';
        return { type, ...contexts[type] };
      }
    
      static buildSpreadProfile(cards) {
        const elementCounts = cards.reduce((counts, card) => {
          const element = card.element || '大阿卡纳';
          counts[element] = (counts[element] || 0) + 1;
          return counts;
        }, {});
        const sortedElements = Object.entries(elementCounts)
          .filter(([element]) => element !== '大阿卡纳')
          .sort((a, b) => b[1] - a[1]);
        const dominantElement = sortedElements[0]?.[0] || '大阿卡纳';
        const majorCount = cards.filter(card => card.id < 100).length;
        const courtCount = cards.filter(card => card.number >= 11).length;
        const aceCount = cards.filter(card => card.number === 1).length;
        const reversedCount = cards.filter(card => card.isReversed).length;
        const reversalLevel = reversedCount === 0
          ? 'none'
          : (reversedCount > cards.length / 2 ? 'heavy' : 'light');
    
        return {
          elementCounts,
          dominantElement,
          majorCount,
          minorCount: cards.length - majorCount,
          courtCount,
          aceCount,
          reversedCount,
          reversalLevel
        };
      }
    
      static pickDatabaseLine(lines, seed) {
        if (!lines || lines.length === 0) return '';
        return lines[Math.abs(seed) % lines.length];
      }
    
      static fillTemplate(template, values) {
        return Object.keys(values).reduce((text, key) =>
          text.split(`{${key}}`).join(values[key]), template || '');
      }
    
      static pickContextLine(lines, seed, profile) {
        const suitByElement = { '火': '权杖', '水': '圣杯', '风': '宝剑', '土': '星币' };
        const conflictingSuits = Object.entries(suitByElement)
          .filter(([element]) => element !== profile.dominantElement)
          .map(([, suit]) => suit);
        const compatible = (lines || []).filter(line => {
          if (profile.reversedCount === 0 && line.includes('逆位')) return false;
          return !conflictingSuits.some(suit => line.includes(suit));
        });
        return this.pickDatabaseLine(compatible.length ? compatible : lines, seed);
      }
    
      static seedFromSpread(question, cards) {
        const questionSeed = String(question).split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return cards.reduce((sum, card, index) => sum + card.id * (index + 1) + (card.isReversed ? 17 : 0), questionSeed);
      }
    
      static interpretPosition(card, position, context, seed = 0) {
        const orientation = card.isReversed ? '逆位' : '正位';
        const meaning = card.isReversed ? card.reversed : card.upright;
        const values = {
          position: position.name,
          positionMeaning: position.meaning,
          card: card.name,
          orientation,
          context: context.label,
          focus: context.focus
        };
        const opener = this.fillTemplate(
          this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.positionOpeners, seed), values
        );
        const bridge = this.fillTemplate(
          this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.positionBridges, seed + 5), values
        );
        const orientationVoice = this.pickDatabaseLine(
          TAROT_ANALYSIS_DATABASE.orientationVoices[card.isReversed ? 'reversed' : 'upright'], seed + 11
        );
        const contextBridge = this.fillTemplate(
          this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.contextBridges, seed + 17), values
        );
        return `${opener}：${meaning} ${bridge}${orientationVoice} ${context.label}提示：${contextBridge}`;
      }
    
      static generateOverallAnalysis(question, spread, spreadResult, cards, context) {
        const dbContext = TAROT_ANALYSIS_DATABASE.contexts[context.type] || TAROT_ANALYSIS_DATABASE.contexts.general;
        const profile = this.buildSpreadProfile(cards);
        const seed = this.seedFromSpread(question, cards);
        const reversedCount = cards.filter(card => card.isReversed).length;
        const uprightCount = cards.length - reversedCount;
        const firstCard = cards[0];
        const lastCard = cards[cards.length - 1];
        const cardSummary = spreadResult
          .map(item => `${item.position}是${item.card.name}${item.card.isReversed ? '逆位' : '正位'}`)
          .join('，');
    
        const contextFocus = this.pickDatabaseLine(dbContext.focus, seed);
        const opportunity = this.pickContextLine(dbContext.opportunity, seed + 1, profile);
        const caution = this.pickContextLine(dbContext.caution, seed + 2, profile);
        const spreadFrame = TAROT_ANALYSIS_DATABASE.spreads[spread.name] || '';
        const analysisOpener = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.analysisOpeners, seed + 29);
        const summaryLead = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.summaryLeads, seed + 31);
        const elementVariants = TAROT_ANALYSIS_DATABASE.elementVariants[profile.dominantElement];
        const dominantElementTheme = this.pickDatabaseLine(elementVariants, seed + 37)
          || `主导能量指向${TAROT_ANALYSIS_DATABASE.elementThemes[profile.dominantElement] || '命运主轴、阶段性课题和深层转变'}。`;
        const reversalTheme = this.pickDatabaseLine(
          TAROT_ANALYSIS_DATABASE.reversalVariants[profile.reversalLevel], seed + 41
        ) || TAROT_ANALYSIS_DATABASE.reversalPatterns[profile.reversalLevel];
        const structureThemes = [];
        if (profile.majorCount >= Math.ceil(cards.length / 2)) {
          structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.majorHeavy, seed + 43));
        } else {
          structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.minorHeavy, seed + 43));
        }
        if (profile.courtCount >= 2) {
          structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.courtHeavy, seed + 47));
        }
        if (profile.aceCount > 0) {
          structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.acePresent, seed + 53));
        }
    
        const trajectory = this.fillTemplate(
          this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.trajectoryBridges, seed + 59),
          { first: firstCard.name, last: lastCard.name }
        );
    
        const balance = reversedCount === 0
          ? '牌面整体顺畅，阻力较少'
          : (reversedCount > uprightCount
            ? '逆位较多，说明当前议题里阻滞、内耗或延迟需要优先处理'
            : '正逆位并存，说明机会与挑战同时存在');
    
        return `围绕「${question}」这个${context.label}议题，${analysisOpener} ${spreadFrame} ${summaryLead}：${cardSummary}。本次重点：${contextFocus}。主导元素为${profile.dominantElement}：${dominantElementTheme} 牌组结构：${structureThemes.join(' ')} ${reversalTheme} ${trajectory}${balance}。可利用的窗口是：${opportunity} 需要留神的是：${caution}`;
      }
    
      static generateSuggestion(question, cards, context) {
        const dbContext = TAROT_ANALYSIS_DATABASE.contexts[context.type] || TAROT_ANALYSIS_DATABASE.contexts.general;
        const profile = this.buildSpreadProfile(cards);
        const seed = this.seedFromSpread(question, cards);
        const action = this.pickDatabaseLine(dbContext.action, seed + 3);
        const reversalTheme = this.pickDatabaseLine(
          TAROT_ANALYSIS_DATABASE.reversalVariants[profile.reversalLevel], seed + 61
        ) || TAROT_ANALYSIS_DATABASE.reversalPatterns[profile.reversalLevel];
        const dominantElementTheme = TAROT_ANALYSIS_DATABASE.elementThemes[profile.dominantElement] || '阶段性选择和深层转变';
        const opener = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.suggestionOpeners, seed + 67);
        const closer = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.suggestionClosers, seed + 71);
        return `建议：${opener}${action} 由于当前主轴涉及${dominantElementTheme}，${reversalTheme} ${closer}`;
      }
    
      static buildCopyText(question, spread, gender, cards) {
        const cardLines = cards.map((card, index) => {
          const position = spread.positions[index];
          return `${index + 1}. ${position.name}（${position.meaning}）：${card.name} · ${card.isReversed ? '逆位' : '正位'}`;
        });
        return [
          '【塔罗抽牌原始结果】',
          `所问：${question}`,
          `性别：${gender}`,
          `牌阵：${spread.name}`,
          '牌面：',
          ...cardLines,
          '',
          '请仅依据以上原始牌面进行解读。'
        ].join('\n');
      }
    
      /**
       * 执行塔罗占卜
       * @param {string} question - 问题
       * @param {string} spreadName - 牌阵名称
       * @param {string} gender - 性别
       * @returns {Object} 占卜结果
       */
      static divinate(question, spreadName, gender) {
        const spread = SPREADS[spreadName] || SPREADS['三牌阵'];
        const questionContext = this.classifyQuestion(question);
        const cards = this.drawCards(spread.cardCount);
    
        // 构建牌阵结果
        const spreadResult = cards.map((card, index) => ({
          position: spread.positions[index].name,
          positionMeaning: spread.positions[index].meaning,
          card: {
            name: card.name,
            nameEn: card.nameEn,
            meaning: card.meaning,
            imageKey: card.imageKey,
            isReversed: card.isReversed
          },
          interpretation: this.interpretPosition(
            card,
            spread.positions[index],
            questionContext,
            this.seedFromSpread(question, cards) + card.id * (index + 1) + index * 23
          )
        }));
    
        // 生成综合分析
        const cardNames = cards.map(c => c.name + (c.isReversed ? '(逆位)' : '')).join('、');
        const analysis = this.generateOverallAnalysis(question, spread, spreadResult, cards, questionContext);
    
        const suggestion = this.generateSuggestion(question, cards, questionContext);
        const copyText = this.buildCopyText(question, spread, gender, cards);
    
        return {
          question,
          spread: spread.name,
          gender,
          questionType: questionContext.type,
          cards: cardNames,
          copyText,
          spreadResult,
          analysis,
          suggestion
        };
      }
    }
    
    module.exports = TarotEngine;
    
  });

  define("core/jiaobeiEngine", function (module, exports, require) {
    /**
     * 珓杯（掷筊）共享核心。
     * 每枚珓杯独立出现平面（阳）或凸面（阴）：
     * 一阴一阳=圣杯，双阳=笑杯，双阴=阴杯。
     */
    class JiaobeiEngine {
      static castPiece(random = Math.random) {
        return random() < 0.5
          ? { side: '平面', nature: '阳', key: 'flat' }
          : { side: '凸面', nature: '阴', key: 'round' };
      }
    
      static interpretPieces(pieces) {
        const flatCount = pieces.filter(piece => piece.key === 'flat').length;
        if (flatCount === 1) {
          return {
            type: 'sacred',
            name: '圣杯',
            symbol: '☾◖',
            verdict: '允可·阴阳相应',
            meaning: '一阴一阳，传统上表示所问之事得到肯定回应，或当下方向可以继续。',
            guidance: '若问题已经清楚，可按原计划进行下一步；重大事项仍应结合现实信息判断。',
            canProceed: true
          };
        }
        if (flatCount === 2) {
          return {
            type: 'laughing',
            name: '笑杯',
            symbol: '◖◖',
            verdict: '未定·问法需澄清',
            meaning: '两面皆阳，传统上视为笑而不答，常见于问题含糊、时机未到或已有答案却反复追问。',
            guidance: '不要立刻将同一句话重复多次。先把问题改成单一、明确、可以用是否回答的句子。',
            canProceed: null
          };
        }
        return {
          type: 'yin',
          name: '阴杯',
          symbol: '☾☾',
          verdict: '不允·暂勿推进',
          meaning: '两面皆阴，传统上表示否定、不合宜，或当下条件尚不支持所问之事。',
          guidance: '先停止不可逆或高风险行动，检查时机、动机与现实条件，不用反复掷杯强求改变答案。',
          canProceed: false
        };
      }
    
      static cast(question = '') {
        const pieces = [this.castPiece(), this.castPiece()];
        return {
          question: String(question).trim(),
          pieces,
          ...this.interpretPieces(pieces)
        };
      }
    
      static confirmPresence(invitee = '') {
        const name = String(invitee).trim();
        if (!name) throw new Error('请先填写请示对象。');
        return {
          stage: 'presence',
          invitee: name,
          ...this.cast(`请问${name}是否在座，并愿意受询？`)
        };
      }
    
      static askQuestion(question = '', presenceConfirmed = false) {
        if (presenceConfirmed !== true) throw new Error('请示对象尚未以圣杯确认在座，不能进入具体问事。');
        const prompt = String(question).trim();
        if (!prompt) throw new Error('请填写具体事项。');
        return { stage: 'question', ...this.cast(prompt) };
      }
    }
    
    module.exports = JiaobeiEngine;
    
  });

  const core = {
    liuyao: modules['core/liuyaoEngine'],
    tarot: modules['core/tarotEngine'],
    jiaobei: modules['core/jiaobeiEngine']
  };
  global.DestinyCoreShared = core;
  global.loadDestinyCore = async function () { return core; };
})(window);
