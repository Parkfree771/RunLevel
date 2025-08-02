module.exports = {

"[project]/src/lib/getTrainingPlan.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getTargetedTrainingPlan": ()=>getTargetedTrainingPlan
});
var __TURBOPACK__commonjs__external__fs__ = __turbopack_external_require__("fs", true);
var __TURBOPACK__commonjs__external__path__ = __turbopack_external_require__("path", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
// 텍스트 파일에서 모든 계획을 파싱하는 내부 함수
function parseTrainingFile(fileContent) {
    const lines = fileContent.split('\n').map((line)=>line.trim()).filter((line)=>line);
    const plans = [];
    let currentPlan = null;
    let scheduleStarted = false;
    for (const line of lines){
        if (line.match(/^\d+\./)) {
            if (currentPlan) {
                plans.push(currentPlan);
            }
            const titleMatch = line.match(/^\d+\.\s*(.*?)(?:을 위한|목표)/);
            const targetMatch = line.match(/목표:\s*(.*)/);
            currentPlan = {
                title: titleMatch ? titleMatch[1].trim() : '소제목 없음',
                target: targetMatch ? targetMatch[1].trim() : '목표 없음',
                schedule: []
            };
            scheduleStarted = false;
        } else if (line.startsWith('요일')) {
            scheduleStarted = true;
        } else if (currentPlan && scheduleStarted && !line.includes('Workout Type')) {
            const parts = line.split('\t').map((p)=>p.trim()).filter((p)=>p);
            if (parts.length >= 3) {
                currentPlan.schedule.push({
                    day: parts[0],
                    type: parts[1],
                    content: parts[2],
                    tips: parts[3] || ''
                });
            }
        }
    }
    if (currentPlan) {
        plans.push(currentPlan);
    }
    return plans;
}
function getTargetedTrainingPlan(gender, distance, level) {
    const genderMap = {
        male: '남성',
        female: '여성'
    };
    const distanceMap = {
        '10km': '10km',
        'Half Marathon': '하프',
        'Full Marathon': '풀코스'
    };
    const filename = `${genderMap[gender]} ${distanceMap[distance]} 한글.txt`;
    const filePath = __TURBOPACK__commonjs__external__path__["default"].join(process.cwd(), '훈련 프로그램 데이터', filename);
    try {
        const fileContent = __TURBOPACK__commonjs__external__fs__["default"].readFileSync(filePath, 'utf8');
        const allPlans = parseTrainingFile(fileContent);
        const levelIndexMap = {
            belowAverage: 0,
            average: 1,
            aboveAverage: 2 // A,S 등급은 세번째 플랜
        };
        const planIndex = levelIndexMap[level];
        return allPlans[planIndex] || null;
    } catch (error) {
        console.error(`Error reading or parsing file ${filename}:`, error);
        return null;
    }
}

})()),
"[project]/src/app/api/training-plan/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getTrainingPlan$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/getTrainingPlan.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const gender = searchParams.get('gender');
    const distance = searchParams.get('distance');
    const level = searchParams.get('level');
    if (!gender || !distance || !level) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Missing required parameters'
        }, {
            status: 400
        });
    }
    try {
        const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getTrainingPlan$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTargetedTrainingPlan"])(gender, distance, level);
        if (!plan) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Training plan not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(plan);
    } catch (error) {
        console.error('API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}

})()),

};

//# sourceMappingURL=src_88300e._.js.map