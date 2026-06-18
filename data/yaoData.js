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

