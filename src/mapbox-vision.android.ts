import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import { MapboxVisionView as MapboxVisionViewBase } from "./mapbox-vision.common";

export class MapboxVisionView extends MapboxVisionViewBase {
  private static PERMISSIONS_REQUEST_CODE = 3434;
  private visionEventsListener: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener;

  createNativeView(): Object {
    let nativeView = super.createNativeView();
    console.log("MapboxVisionView, createNativeView");


    if (!this.hasCamera()) {
      console.log("There's no Camera on this device :(");
    } else {
      // no permission required for older Android versions
      if (android.os.Build.VERSION.SDK_INT < 23) {
        this.initView(nativeView);
      } else {
        const permissionCb = (args: application.AndroidActivityRequestPermissionsEventData) => {
          if (args.requestCode === MapboxVisionView.PERMISSIONS_REQUEST_CODE) {
            application.android.off(application.AndroidApplication.activityRequestPermissionsEvent, permissionCb);

            for (let i = 0; i < args.permissions.length; i++) {
              if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_DENIED) {
                console.log("Permission(s) for Mapbox Vision SDK denied");
                return;
              }
            }

            this.initView(nativeView);
          }
        };

        // grab the permission dialog result
        application.android.on(application.AndroidApplication.activityRequestPermissionsEvent, permissionCb);

        // invoke the permission dialog
        (android.support.v4.app.ActivityCompat as any).requestPermissions(
            application.android.foregroundActivity || application.android.startActivity,
            [android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE, android.Manifest.permission.ACCESS_FINE_LOCATION, android.Manifest.permission.ACCESS_COARSE_LOCATION],
            MapboxVisionView.PERMISSIONS_REQUEST_CODE);
      }
    }

    return nativeView;
  }

  private initView(nativeView) {
    // TODO see doc
    // this.surfaceView = new android.view.SurfaceView(utils.ad.getApplicationContext());
    // nativeView.addView(this.surfaceView);
    // this.runCamera();

    console.log("application.android.nativeApp: " + application.android.nativeApp);
    (<any>com.mapbox.vision.VisionManager).init(application.android.nativeApp, "sk.eyJ1IjoiZWRkeXZlcmJydWdnZW4iLCJhIjoiY2p1c3F5eGVpMDA1eTRlbzJpOXJwdDIxMCJ9.OZRITqde9clot1E8Za_OsQ");
    console.log("init done");

    setTimeout(() => {
      com.mapbox.vision.VisionManager.create();
      console.log("create done");

      this.visionEventsListener = new com.mapbox.vision.mobile.core.interfaces.VisionEventsListener({
        onAuthorizationStatusUpdated(param0: com.mapbox.vision.mobile.core.models.AuthorizationStatus): void {
          console.log("onAuthorizationStatusUpdated");
        },
        onFrameSegmentationUpdated(param0: com.mapbox.vision.mobile.core.models.FrameSegmentation): void {
          console.log("onFrameSegmentationUpdated");
        },
        onFrameDetectionsUpdated(param0: com.mapbox.vision.mobile.core.models.detection.FrameDetections): void {
          console.log("onFrameDetectionsUpdated");
        },
        onFrameSignClassificationsUpdated(param0: com.mapbox.vision.mobile.core.models.classification.FrameSignClassifications): void {
          console.log("onAuthorizationStatusUpdated");
        },
        onRoadDescriptionUpdated(param0: com.mapbox.vision.mobile.core.models.road.RoadDescription): void {
          console.log("onRoadDescriptionUpdated");
        },
        onWorldDescriptionUpdated(param0: com.mapbox.vision.mobile.core.models.world.WorldDescription): void {
          console.log("onAuthorizationStatusUpdated");
        },
        onVehicleStateUpdated(param0: com.mapbox.vision.mobile.core.models.position.VehicleState): void {
          console.log("onVehicleStateUpdated");
        },
        onCameraUpdated(param0: com.mapbox.vision.mobile.core.models.Camera): void {
          console.log("onAuthorizationStatusUpdated");
        },
        onCountryUpdated(param0: com.mapbox.vision.mobile.core.models.Country): void {
          console.log("onCountryUpdated");
        },
        onUpdateCompleted(): void {
          console.log("onUpdateCompleted");
        }
      });
      // com.mapbox.vision.VisionManager.start(this.visionEventsListener);
    }, 1000);
  }

  private hasCamera(): boolean {
    return !!utils.ad
        .getApplicationContext()
        .getPackageManager()
        .hasSystemFeature("android.hardware.camera");
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    console.log("MapboxVisionView, disposeNativeView");
  }
}
