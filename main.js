let map;
let markerGroup;

const spotData = {
    kaguya: {
        title: "超かぐや姫の聖地地図≪立川編≫",
        desc: "立川周辺の聖地を効率よく回る計画が立てやすい。",
        center: [35.69868831467074, 139.41306323298193],
        zoom: 15,
        spots: [
            { lat: 35.70160882163561, lng: 139.41245776183214, popup: '立川駅から徒歩6分。かぐやが彩葉たちを尾行している時の風景' },
            { lat: 35.70209408945748, lng: 139.41220706327385, popup: '立川駅から徒歩7分。芦花たちがテスト赤点回避のお礼として連れてきた場所' },
            { lat: 35.69736424158389, lng: 139.41224018606974, popup: '立川駅から徒歩3分。お祭りに行くかぐやと彩葉が浴衣を確認している場所' },
            { lat: 35.69687438319921, lng: 139.41305162780398, popup: '立川駅から徒歩1分。彩葉がヤチヨを探しに行くときの風景の一つ' }
        ]
    },
    yourname: {
        title: "君の名は。の聖地地図≪東京編≫",
        desc: "東京の聖地を効率よく回る計画が立てやすい。",
        center: [35.690921, 139.700258],
        zoom: 13,
        spots: [
            { lat: 35.68512621873994, lng: 139.7231480933884, popup: '四谷三丁目駅から徒歩9分。最後のシーンの階段' },
            { lat: 35.69324963156047, lng: 139.6967844051536, popup: '新宿駅から徒歩6分。大人になった二人がすれ違う' },
            { lat: 35.66529487054816,  lng: 139.72639227247592, popup: '六本木駅から徒歩15分。瀧と奥寺のデート先' }
        ]
    },
    yourname2: {
        title: "君の名は。の聖地地図≪岐阜編≫",
        desc: "岐阜の聖地巡礼用マップです。",
        center: [36.2361, 137.1856],
        zoom: 14,
        spots: [
            { lat: 36.23674791381638, lng: 137.18956720147096, popup: '飛騨古川駅。瀧たちが聞き込みをした駅' },
            { lat: 36.23786085460143,  lng: 137.18551707621407, popup: '飛騨古川駅から徒歩7分。飛騨市図書館。' },
            { lat:36.2395231681653,  lng:137.1977518807489, popup: '飛騨古川駅から徒歩13分。気多若宮神社。宮水神社のモデルとされている。' }
        ]
    },
    haruhi: {
    title: "涼宮ハルヒの憂鬱 聖地地図",
    desc: "西宮の聖地巡礼マップです。",
    center: [34.74717099378355, 135.33679912287087],
    zoom: 13,
    spots: [
        { lat: 34.745956, lng: 135.356597, popup: '阪急西宮北口駅北西口。SOS団の集合場所。' },
        { lat: 34.748487864892354, lng: 135.35605390573352 , popup: '阪急西宮北口駅から徒歩5分。珈琲屋ドリーム。SOS団が日常的に集まって作戦会議をしていた喫茶店のモデル。' },
        { lat:34.76094282528762, lng: 135.32997667377558 , popup: '阪急甲陽園駅。キョンたちの通学路の起点となる駅' },
        { lat:34.7615221412199, lng:135.31269757568933, popup: '甲陽園駅から徒歩27分。兵庫県立西宮北高等学校。ハルヒたちが通う県立北高校のモデル' },
    ]
}
};

window.addEventListener('DOMContentLoaded', () => {
    map = L.map('map').setView(spotData.kaguya.center, spotData.kaguya.zoom);

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
    }).addTo(map);

    markerGroup = L.layerGroup().addTo(map);

    changeArea('kaguya');
});

function changeArea(areaKey) {
    const data = spotData[areaKey];
    if (!data) return;

    document.getElementById('area-title').textContent = data.title;
    document.getElementById('area-desc').textContent = data.desc;

    map.setView(data.center, data.zoom);

    markerGroup.clearLayers();

    data.spots.forEach(spot => {
        L.marker([spot.lat, spot.lng])
            .bindPopup(spot.popup)
            .addTo(markerGroup);
    });
}