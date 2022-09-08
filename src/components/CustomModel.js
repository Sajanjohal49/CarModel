import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Suspense } from "react";
import { proxy, useSnapshot } from "valtio";

import { HexColorPicker } from "react-colorful";
const state = proxy({
  current: null,
  items: {
    Gray_special_car_paint: "#ffffff",
    wheelFrontLeft: "#ffffff",
    wheelNuts: "#ffffff",
    wheelBackLeft: "#ffffff",
    FrontLights: "#ffffff",
    FrontBackGrill: "#ffffff",
    FrontBumperLip: "#ffffff",
    allRims: "#ffffff",
    widebodyKit: "#ffffff",
    accessories: "#ffffff",
    interiorGrills: "#ffffff",

  },
});

export function Model(props) {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF( process.env.PUBLIC_URL +'models/customModel/nissanTitan.glb');
  
  const [hovered, set] = useState(null);

  // console.log(nodes);

  return (
    <group
      ref={ref}
      
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      
      <group rotation={[-Math.PI / 2, 0, 0]}>
    <group rotation={[Math.PI / 2, 0, 0]}>
      <group position={[0, -78.67, 101.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh material-color={snap.items.Gray_special_car_paint} geometry={nodes.body_a_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.body_a_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.body_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.body_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.body_a_blk_paint_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperf_a_painted_metal_metallic_RGH_updated_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.bumperf_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperfbadge_a_Vray_Advan_PlateEXT_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperfcustom_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['bumperfcustom_a_Aluminium_-_Brushed_0'].geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperframef_a_rubber_embossed_NML_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperframer_a_rubberTrim_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperr_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.bumperr_a_painted_metal_smooth_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperrcustom_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.bumperrsidemarkers_a_chrome_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.centerconsolestructure_a_metal_embossed_alpha_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes['centerstackbezels_a_nav_screen|centerstackstructure_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['centerstackbezels_a_LOD0Plastic|centerstackstructure_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes['centerstackbezels_a__slod_nav_screen|centerstackstructure_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['centerstackbezels_a__slod_Material__31|centerstackstructure_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.dashpad_a_fabric_020_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.dashpad_a_leather_textured_003_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes['dashstructure_a_plastic_smooth|gaugepod_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['dashstructure_a_plastic|vents_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.dashstructure_a__slod_plastic_smooth_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorcardlf_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorcardlr_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorhandlelf_a_plastic_smooth_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorhandlelr_a_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes['doorhandlelr_a_Aluminium_-_Brushed_0'].geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.doorhandlelr_a_plastic_smooth_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorjamblf_a__slod_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorlf_a_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.doorlf_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.doorlf_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['doorlf_a_backfacinggeo|mirrorbasel_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.doorsill_a__slod_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.enginebay_a_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.exhaust_a_Vray_Advan_PlateEXT_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.fenders_a_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.fenders_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.fenders_a_plastic_CH2Texture_CH1Emboss_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.fenderssidemarkers_a_lights_smooth_CH1_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.floor_a__slod_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.foglightcf_a_lights_smooth_CH1_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.foglightl_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.foglightlbulbs_a_lights_bump_CH1_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.foglightr_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.foglightrbulbs_a_lights_bump_CH1_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.gaugecluster_a_digitalGauge_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassbodysidemarkers_a_gls_CH2_Custom_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassbumperrsidemarkers_a_gls_CH2_Custom_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasscfl_a_gls_CH2_Custom_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasschmsl_a_gls_clear_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassf_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassfenderssidemarkers_a_gls_CH2_Custom_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasslf_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasslfint_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasslfl_a_gls_clear_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasslhl_a_Front_Lights_Glass_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasslr_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glasslrint_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassltl_a_glass_red_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassr_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrf_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrfint_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrfl_a_gls_clear_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrhl_a_Front_Lights_Glass_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrint_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrr_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrrint_a_Car_Glass_Color_by_Amleto_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.glassrtl_a_glass_red_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.grille_a__slod_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.grille_a__slod_blk_Paint_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.grille_a__slod_S_M_G_Pearl_Tahitian_0_1.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.headlightl_a_gls_CH2_Custom_b_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.headlightl_a_Vray_Advan_PlateEXT_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.headlightr_a_gls_CH2_Custom_b_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.headlightr_a_Vray_Advan_PlateEXT_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.hood_a_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.hoodliner_a_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.mudflaps_rally_Car_wheels_rubber_v2_by_fahd_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.overheadconsole_a__slod_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.pedals_a_steel_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.pedals_a__slod_paint_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.platelightus_a_blkPlastic_SGL_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.plateus_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.plateus_a_US_Plate_base_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['plateus_a_12_-_Default_0'].geometry} material={materials['12_-_Default']} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.rearseats_a_fabric_012_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.seatbeltl_a_plastic_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes['seatbeltl_a_leather_perforated_004|seatr_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.skirtl_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.speakerdoorlf_a_grille_024_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.speakerdoorlr_a_grille_024_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.steeringcolumn_a_plastic_embossed_alpha_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.steeringwheel_a_NIS_badge_004_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.steeringwheel_a_chrome_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.suspension_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.taillightchmsl_a_plastic_smooth_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.taillightl_a_gls_CH2_Custom_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.taillightl_a_plastic_CH2_Custom_Livery_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.taillightr_a_HDM_06_006_headlight_chrome_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.taillightr_a_glass_redB_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.trunk_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.trunk_a_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.trunk_a_Vray_Advan_PlateEXT_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes['trunk_a_gls_limoTint|trunkcustom_a_0'].geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.trunkbay_a_plastic_textured_001_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.trunkbay_a_plastic_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes['trunkbay_a__slod_Aluminium_-_Brushed_0'].geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.trunkliner_a_plastic_CH1_Custom_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.trunkliner_a__slod_plastic_textured_001_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.undercarriage_a_S_M_G_Pearl_Tahitian_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.wing_a_Gray_special_car_paint_0.geometry} material={materials.Gray_special_car_paint} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.wingmirrorl_a_Mirror_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.wingmirrorl_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.wingmirrorr_a_Mirror_0.geometry} material={materials.Gray_special_car_paint} />
          <mesh geometry={nodes.wingmirrorr_a_plastic_smooth_a_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[0, 60.12, -317.81]} scale={600}>
          <mesh geometry={nodes.wipers_a_rivet_004_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          <mesh geometry={nodes.wipers_a_painted_metal_smooth_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
        </group>
        <group position={[-571.6, -1109.78, -323.96]} scale={66}>
          <group position={[-1.33, 0, 0]} scale={16.86}>
            <mesh geometry={nodes.nis_titan_17_wheellf_valve_stem_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf_rim2_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf_valve_cap_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          </group>
          <group rotation={[0, 0, Math.PI]} scale={[-10, 10, 10]}>
            <group position={[-0.31, 0.01, -1.68]} rotation={[0.01, 1.28, -1.57]}>
              <mesh geometry={nodes.wing_offroad__slod001_Car_wheels_rubber_v2_by_fahd_0.geometry} material={materials.Gray_special_car_paint} />
            </group>
          </group>
        </group>
        <group position={[-571.39, 1226.55, -323.96]} rotation={[0, 0, -Math.PI / 6]} scale={66}>
          <group rotation={[0, 0, Math.PI]} scale={[-10, 10, 10]}>
            <group position={[-0.31, 0.01, -1.68]} rotation={[0.01, 1.28, -1.57]}>
              <mesh geometry={nodes.wing_offroad__slod002_Car_wheels_rubber_v2_by_fahd_0.geometry} material={materials.Gray_special_car_paint} />
            </group>
          </group>
          <group position={[-1.33, 0, 0]} scale={16.86}>
            <mesh geometry={nodes.nis_titan_17_wheellf001_valve_stem_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf001_rim2_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf001_valve_cap_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          </group>
        </group>
        <group position={[571.17, 1225.02, -323.96]} rotation={[0, 0, -Math.PI / 6]} scale={[-66, 66, 66]}>
          <group rotation={[0, 0, Math.PI]} scale={[-10, 10, 10]}>
            <group position={[-0.31, 0.01, -1.68]} rotation={[0.01, 1.28, -1.57]}>
              <mesh geometry={nodes.wing_offroad__slod003_Car_wheels_rubber_v2_by_fahd_0.geometry} material={materials.Gray_special_car_paint} />
            </group>
          </group>
          <group position={[-1.33, 0, 0]} scale={16.86}>
            <mesh geometry={nodes.nis_titan_17_wheellf002_valve_stem_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf002_rim2_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf002_valve_cap_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          </group>
        </group>
        <group position={[571.38, -1109.78, -323.96]} scale={[-66, 66, 66]}>
          <group rotation={[0, 0, Math.PI]} scale={[-10, 10, 10]}>
            <group position={[-0.31, 0.01, -1.68]} rotation={[0.01, 1.28, -1.57]}>
              <mesh geometry={nodes.wing_offroad__slod004_Car_wheels_rubber_v2_by_fahd_0.geometry} material={materials.Gray_special_car_paint} />
            </group>
          </group>
          <group position={[-1.33, 0, 0]} scale={16.86}>
            <mesh geometry={nodes.nis_titan_17_wheellf003_valve_stem_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf003_rim2_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
            <mesh geometry={nodes.nis_titan_17_wheellf003_valve_cap_0.geometry} material={materials.plastic_embossed_alpha_aseatl_a} />
          </group>
        </group>
      </group>
    </group>
  </group>
    </group>
  );
}
function Picker() {
  const snap = useSnapshot(state);
  console.log(snap.items[snap.current]);
  return (
    <div className='relative'>
    <div  style={{ display: snap.current ? "block" : "none" }} >
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1 className="text-white">{snap.current}</h1>
    </div>
    </div>
  );
}
export default function CustomModel() {
  return (
    <>
      <Picker />
      <Canvas
        // style={{ background: "#ffff" }}
        shadows
        camera={{ position: [0, 70, 0], fov: 50 }}
      >
        <OrbitControls target={[0, -0.95, 0]} maxPolarAngle={1.45} />

        <PerspectiveCamera makeDefault fov={60} position={[90, 0, 700]} />
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}
