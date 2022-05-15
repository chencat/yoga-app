let eventList = [
    { value1: '瑜珈師資培訓課程', value2: '2022/6/6～2022/7/30 8:00-15:00', value3: 'Hart Lazer', pause: true, finish: false }
    , { value1: '週一下午8:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', pause: true, finish: false }
    , { value1: '週二下午2:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週二下午7:00', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週二下午9:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週三下午7:00', value2: '療癒 / Restorative 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週四下午7:00', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週四下午9:15', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週五下午2:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週五下午7:30', value2: '基礎1 / Basic 1 實體課 / 視訊課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週六上午10:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', pause: true, finish: false }
    , { value1: '週六下午7:30', value2: '睡眠修護 視訊課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週日下午7:30', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '週日下午10:30(已暫停)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: false, finish: false }
    , { value1: '週二下午4:30 2022/6/6～2022/7/30(尚未開始)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', pause: true, finish: false }
    , { value1: '女性限定 照顧自身瑜伽 主題一•盆底肌照顧&修護瑜伽(已結束)', value2: '2/26 週六 12:30-18:00', value3: 'Doris', pause: false, finish: true }
    , { value1: '女性限定 照顧自身瑜伽 主題二•女性各時期賀爾蒙特殊瑜伽練習 (已結束)', value2: '2/27 周日 12:30-18:00', value3: 'Doris', pause: false, finish: true }];
let courseList = [
    { value1: '瑜珈師資培訓課程', value2: '2022/6/6～2022/7/30 8:00-15:00', value3: 'Hart Lazer', value4: 10, value5: 5, value14: [] }
    , { status: '已結束', value1: '2022/04/30 週六下午7:30(已結束)', value2: '睡眠修護 視訊課', value3: 'Doris', value4: 10, value6: 10, value14: [] }
    , { status: '已結束', value1: '2022/05/01 週日下午7:30(已結束)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 7, value5: 0, value6: 7, value7: 1, value14: [] }
    , { value1: '2022/05/02 週一下午8:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', value4: 5, value5: 5, value6: 0, value7: 2, value14: [] }
    , { value1: '2022/05/03 週二下午2:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: [] }
    , { value1: '2022/05/03 週二下午7:00', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: [] }
    , { value1: '2022/05/03 週二下午9:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: [] }
    , { value1: '2022/05/04 週三下午7:00', value2: '療癒 / Restorative 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: [] }
    , { value1: '2022/05/05 週四下午7:00', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: [] }
    , { value1: '2022/05/05 週四下午9:15', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 20, value13: 0, value14: [] }
    , { status: '停課', value1: '2022/05/06 週五下午2:15(停課)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value14: [] }
    , { status: '停課', value1: '2022/05/06 週五下午7:30(停課)', value2: '基礎1 / Basic 1 實體課 / 視訊課', value3: 'Doris', value14: [] }
    , { value1: '2022/05/07 週六上午10:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', value4: 7, value5: 0, value6: 7, value7: 1, value14: [] }
    , { status: '停課', value1: '2022/05/07 週六下午7:30(停課)', value2: '睡眠修護 視訊課', value3: 'Doris', value14: [] }
    , { status: '停課', value1: '2022/05/08 週日下午7:30(停課)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value14: [] }];
let studentEventList = [
    { value1: '瑜珈師資培訓課程', value2: '2022/6/6～2022/7/30 8:00-15:00', value3: 'Hart Lazer', value4: 10, value5: 5, value14: ['登記'] }
    , { value1: '2022/05/02 週一下午8:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', value4: 5, value5: 5, value6: 0, value7: 2, value14: ['參加', '不參加'] }
    , { value1: '2022/05/03 週二下午2:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: ['取消'], attend: true, reserve: false }
    , { value1: '2022/05/03 週二下午7:00', value2: '療癒 / Restorative 實體課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: ['取消'], attend: false, reserve: true }
    , { value1: '2022/05/03 週二下午7:00', value2: '療癒 / Restorative 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: ['參加'] }
    , { value1: '2022/05/03 週二下午9:15', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: ['參加', '不參加'] }
    , { value1: '2022/05/04 週三下午7:00', value2: '療癒 / Restorative 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: ['登記'] }
    , { value1: '2022/05/05 週四下午7:00', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: ['登記'] }
    , { value1: '2022/05/05 週四下午9:15', value2: '療癒 / Restorative 實體課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 20, value13: 0, value14: ['參加', '不參加'] }
    , { value1: '2022/05/05 週四下午9:15', value2: '療癒 / Restorative 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 20, value13: 0, value14: ['參加'] }
    , { status: '停課', value1: '2022/05/06 週五下午2:15(停課)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value14: [] }
    , { status: '停課', value1: '2022/05/06 週五下午7:30(停課)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value14: [] }
    , { status: '停課', value1: '2022/05/06 週五下午7:30(停課)', value2: '基礎1 / Basic 1 視訊課', value3: 'Doris', value14: [] }
    , { value1: '2022/05/07 週六上午10:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', value4: 7, value5: 0, value6: 7, value7: 1, value14: ['登記'] }
    , { status: '停課', value1: '2022/05/07 週六下午7:30(停課)', value2: '睡眠修護 視訊課', value3: 'Doris', value14: [] }
    , { status: '停課', value1: '2022/05/08 週日下午7:30(停課)', value2: '基礎1 / Basic 1 實體課', value3: 'Doris', value14: [] }];
let studentEventCourseList = [
    , { value1: '2022/05/02 週一下午8:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', value4: 5, value5: 5, value6: 0, value7: 2, value14: ['參加', '不參加'], attend: false, reserve: false }
    , { value1: '2022/05/03 週二下午7:00', value2: '療癒 / Restorative 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: ['參加'], attend: false, reserve: false }
    , { value1: '2022/05/04 週三下午7:00', value2: '療癒 / Restorative 實體課', value3: 'Doris', value4: 5, value5: 5, value6: 0, value7: 0, value14: ['取消'], attend: false, reserve: true }
    , { value1: '2022/05/05 週四下午9:15', value2: '療癒 / Restorative 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 20, value13: 0, value14: ['簽到', '取消'], attend: true, reserve: false }
    , { value1: '2022/05/07 週六上午10:00', value2: '基礎1 / Basic 1 實體課', value3: 'Bella', value4: 7, value5: 0, value6: 7, value7: 1, value14: ['登記'], attend: false, reserve: false }];
let studentList = [
    { value0: 'avatar-1.jpg', value1: '愛達', value2: 'Ada', value3: '10', value4: '2021/12/31', status: '', selected: true }
    , { value0: 'avatar-2.jpg', value1: '珍妮', value2: '大Jeanie', value3: '20', value4: '2021/12/31', status: '', selected: true }
    , { value0: 'avatar-3.jpg', value1: '珍妮', value2: '小Jeanie', value3: '5', value4: '2021/12/31', status: '', selected: false }
    , { value0: 'avatar-4.jpg', value1: '凱倫', value2: 'Karen', value3: '0', value4: '2021/12/31', status: '停權', selected: false }
    , { value0: 'avatar-5.jpg', value1: 'chencatmail', value2: '丁丁', value3: '10', value4: '2022/12/31', status: '', selected: true }];
let teacherList = [{ id: 1, name: 'Doris' }, { id: 2, name: 'Bella' }];
let locationList = [{ id: 1, value1: '璽璽藝術空間D Art Studio', value2: '台中市公益路155巷92號' }];
let announcementList = [
    { id: '001', value1: '停課通知', value2: '公告日期：2022/04/01', value3: '♦️本週二4/19-五4/23Doris停課休息，無任何視訊及實體課程喔下週見✨✨', stop: false }
    , { id: '002', value1: '課程暫停', value2: '公告日期：2022/06/01', value3: '🔶公告🔸 週二班同學請注意： 六月開始有師資培訓 本班會暫停6月+7月 2個月 8月後會重新再招生此班 目前剩餘堂數的同學不多， 已過期或請剩些許堂數，以下各週二 5/10、5/17、5/24、5/31 請盡快來上課 有問題請訊息我', stop: false }
    , { id: '003', value1: '注意事項', value2: '公告日期：2022/04/01', value3: '♦️♦️請大家入場一定要掃描QR Code，口罩配戴目前政府公佈自由選擇，請大家做好防疫 ，一起努力，亦可選擇線上課<br>♦️上課必帶大毛巾，「不要」帶小汗巾或小手帕', stop: false }
    , { id: '004', value1: '開課資訊', value2: '公告日期：2022/04/01', value3: '清明連假確定開課資訊：<br>4/1週五 614:15 基礎正位/ 19:30基礎正位<br>4/2 週六廿-10:00基礎正位<br>4/3週日子19:30基礎正位<br>4/4週一20:00基礎正位<br>4/5 週二子19:00療病/21:15 基礎正位', stop: false }];
let notificationList = [
    { id: '001', value1: '簽到', value2: '通知日期：2022/04/01', value3: '2022/05/02 週一下午8:00 基礎1 / Basic 1 實體課，還沒簽到', read: true }
    , { id: '002', value1: '工作坊', value2: '通知日期：2022/06/01', value3: '瑜珈師資培訓課程已接收您的預約', read: false }
    , { id: '003', value1: '剩餘課程', value2: '通知日期：2022/04/01', value3: '目前剩餘課程為0', read: false }];

let studentInfo = '年齡：40\n毛毯4條\n受傷紀錄';
let studentCourseList = [
    { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '已簽到', value6: [] }
    , { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '參加', value6: ['簽到', '取消'] }
    , { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '課程已結束，尚未簽到', value6: ['簽到', '取消'] }
    , { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '提出登記', value6: ['接受', '取消'] }];
let studentInfoCourseList = [
    { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '已簽到', value6: [] }
    , { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '參加', value6: ['簽到', '取消'] }
    , { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '課程已結束，尚未簽到', value6: ['簽到'] }
    , { value1: '2022/01/01', value2: '週一下午8:00 基礎1 / Basic 1 實體課', value3: 'Doris', value4: '璽璽藝術空間D Art Studio', value5: '提出登記', value6: ['取消'] }];
let courseHistoryList = [
    { status: '已結束', value1: '2022/03/03 週二下午7:00(已結束)', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: [] }
    , { value1: '2022/04/03 週二下午7:00', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: [] }
    , { status: '停課', value1: '2022/05/03 週二下午7:00(停課)', value2: '療癒 / Restorative 實體課 / 視訊課', value3: 'Doris', value8: 5, value9: 5, value10: 0, value11: 0, value12: 30, value13: 0, value14: [] }];
