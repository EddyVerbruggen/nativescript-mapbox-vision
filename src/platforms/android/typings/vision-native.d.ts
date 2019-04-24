/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export class BuildConfig {
						public static class: java.lang.Class<com.mapbox.vision.mobile.core.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export class NativeVisionManager extends com.mapbox.vision.mobile.core.interfaces.LocationEngineListener {
						public static class: java.lang.Class<com.mapbox.vision.mobile.core.NativeVisionManager>;
						public static ML_CONFIG_US: string;
						public static ML_CONFIG_CN: string;
						public static DETECTION: string;
						public static CLASSIFICATION_US: string;
						public static CLASSIFICATION_CN: string;
						public static SEGMENTATION: string;
						public static MERGED: string;
						public static Companion: com.mapbox.vision.mobile.core.NativeVisionManager.Companion;
						public stopTelemetrySavingSession(): void;
						public create(param0: com.mapbox.vision.mobile.core.telemetry.TelemetryEventManager, param1: com.mapbox.vision.mobile.core.telemetry.TelemetryImageSaver): void;
						public worldToPixel(param0: com.mapbox.vision.mobile.core.models.world.WorldCoordinate): com.mapbox.vision.mobile.core.models.frame.PixelCoordinate;
						public getFrameStatistics(): com.mapbox.vision.mobile.core.models.FrameStatistics;
						public destroy(): void;
						public constructor(param0: string, param1: globalAndroid.app.Application);
						public setMotion(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: native.Array<number>, param5: number): void;
						public setCameraParameters(param0: number, param1: number, param2: number, param3: number): void;
						public setSegmentationFixedFps(param0: number): void;
						public setDetectionDynamicFps(param0: number, param1: number): void;
						public startTelemetrySavingSession(param0: string): void;
						public geoToWorld(param0: com.mapbox.vision.mobile.core.models.position.GeoCoordinate): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
						public getClips(): native.Array<com.mapbox.vision.mobile.core.models.VideoClip>;
						public setHeading(param0: number, param1: native.Array<number>, param2: number): void;
						public pixelToWorld(param0: com.mapbox.vision.mobile.core.models.frame.PixelCoordinate): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
						public setSegmentationDynamicFps(param0: number, param1: number): void;
						public worldToGeo(param0: com.mapbox.vision.mobile.core.models.world.WorldCoordinate): com.mapbox.vision.mobile.core.models.position.GeoCoordinate;
						public setTelemetryTimestamp(param0: number): void;
						public setDetectionFixedFps(param0: number): void;
						public getVisionManager(): number;
						public stop(): void;
						public getCoreTimeSeconds(): number;
						public getDetectionsFrameBytes(param0: number): native.Array<number>;
						public resetClips(): void;
						public playTelemetry(param0: string): void;
						public start(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener): void;
						public setFrame(param0: native.Array<number>, param1: com.mapbox.vision.mobile.core.models.frame.ImageFormat, param2: number, param3: number): void;
						public setLocation(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public getSegmentationFrameBytes(param0: number): native.Array<number>;
						public getModulePtr(): number;
						public setUseMergedModel(param0: boolean): void;
					}
					export module NativeVisionManager {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.NativeVisionManager.Companion>;
							public readFromExternalDirOrAssets(param0: globalAndroid.app.Application, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module http {
						export class HttpClient {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.http.HttpClient>;
							public httpGet(param0: string): void;
							public constructor();
							public httpPost(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module interfaces {
						export class LocationEngineListener {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.LocationEngineListener>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.mobile.core.interfaces.LocationEngineListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setLocation(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
							});
							public constructor();
							public setLocation(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module interfaces {
						export class Platform {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.Platform>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.mobile.core.interfaces.Platform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								readLocalStorageByKey(param0: string): string;
								writeLocalStorageByKey(param0: string, param1: string, param2: number): void;
								getToken(): string;
							});
							public constructor();
							public writeLocalStorageByKey(param0: string, param1: string, param2: number): void;
							public readLocalStorageByKey(param0: string): string;
							public getToken(): string;
						}
						export module Platform {
							export class Impl extends com.mapbox.vision.mobile.core.interfaces.Platform {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.Platform.Impl>;
								public static Companion: com.mapbox.vision.mobile.core.interfaces.Platform.Impl.Companion;
								public readLocalStorageByKey(param0: string): string;
								public writeLocalStorageByKey(param0: string, param1: string, param2: number): void;
								public getToken(): string;
								public constructor(param0: string, param1: globalAndroid.app.Application);
							}
							export module Impl {
								export class Companion {
									public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.Platform.Impl.Companion>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module interfaces {
						export class SensorDataListener {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.SensorDataListener>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.mobile.core.interfaces.SensorDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDeviceMotionDataReady(param0: com.mapbox.vision.mobile.core.models.DeviceMotionData): void;
								onHeadingDataReady(param0: com.mapbox.vision.mobile.core.models.HeadingData): void;
							});
							public constructor();
							public onDeviceMotionDataReady(param0: com.mapbox.vision.mobile.core.models.DeviceMotionData): void;
							public onHeadingDataReady(param0: com.mapbox.vision.mobile.core.models.HeadingData): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module interfaces {
						export class VisionEventsListener {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.VisionEventsListener>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.mobile.core.interfaces.VisionEventsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAuthorizationStatusUpdated(param0: com.mapbox.vision.mobile.core.models.AuthorizationStatus): void;
								onFrameSegmentationUpdated(param0: com.mapbox.vision.mobile.core.models.FrameSegmentation): void;
								onFrameDetectionsUpdated(param0: com.mapbox.vision.mobile.core.models.detection.FrameDetections): void;
								onFrameSignClassificationsUpdated(param0: com.mapbox.vision.mobile.core.models.classification.FrameSignClassifications): void;
								onRoadDescriptionUpdated(param0: com.mapbox.vision.mobile.core.models.road.RoadDescription): void;
								onWorldDescriptionUpdated(param0: com.mapbox.vision.mobile.core.models.world.WorldDescription): void;
								onVehicleStateUpdated(param0: com.mapbox.vision.mobile.core.models.position.VehicleState): void;
								onCameraUpdated(param0: com.mapbox.vision.mobile.core.models.Camera): void;
								onCountryUpdated(param0: com.mapbox.vision.mobile.core.models.Country): void;
								onUpdateCompleted(): void;
							});
							public constructor();
							public onRoadDescriptionUpdated(param0: com.mapbox.vision.mobile.core.models.road.RoadDescription): void;
							public onAuthorizationStatusUpdated(param0: com.mapbox.vision.mobile.core.models.AuthorizationStatus): void;
							public onFrameSignClassificationsUpdated(param0: com.mapbox.vision.mobile.core.models.classification.FrameSignClassifications): void;
							public onCameraUpdated(param0: com.mapbox.vision.mobile.core.models.Camera): void;
							public onCountryUpdated(param0: com.mapbox.vision.mobile.core.models.Country): void;
							public onFrameSegmentationUpdated(param0: com.mapbox.vision.mobile.core.models.FrameSegmentation): void;
							public onUpdateCompleted(): void;
							public onWorldDescriptionUpdated(param0: com.mapbox.vision.mobile.core.models.world.WorldDescription): void;
							public onFrameDetectionsUpdated(param0: com.mapbox.vision.mobile.core.models.detection.FrameDetections): void;
							public onVehicleStateUpdated(param0: com.mapbox.vision.mobile.core.models.position.VehicleState): void;
						}
						export module VisionEventsListener {
							export class DefaultImpls {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.interfaces.VisionEventsListener.DefaultImpls>;
								public static onVehicleStateUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.position.VehicleState): void;
								public static onCountryUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.Country): void;
								public static onFrameSignClassificationsUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.classification.FrameSignClassifications): void;
								public static onFrameSegmentationUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.FrameSegmentation): void;
								public static onUpdateCompleted(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener): void;
								public static onFrameDetectionsUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.detection.FrameDetections): void;
								public static onAuthorizationStatusUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.AuthorizationStatus): void;
								public static onWorldDescriptionUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.world.WorldDescription): void;
								public static onRoadDescriptionUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.road.RoadDescription): void;
								public static onCameraUpdated(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener, param1: com.mapbox.vision.mobile.core.models.Camera): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class AuthorizationStatus {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.AuthorizationStatus>;
							public static AuthUnknown: com.mapbox.vision.mobile.core.models.AuthorizationStatus;
							public static NotAuthorized: com.mapbox.vision.mobile.core.models.AuthorizationStatus;
							public static Authorized: com.mapbox.vision.mobile.core.models.AuthorizationStatus;
							public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.AuthorizationStatus;
							public static values(): native.Array<com.mapbox.vision.mobile.core.models.AuthorizationStatus>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class Camera {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.Camera>;
							public getFrameHeight(): number;
							public getFieldOfView(): number;
							public getCalibrationProgress(): number;
							public getFrameWidth(): number;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class CameraParameters {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.CameraParameters>;
							public getWidth(): number;
							public hashCode(): number;
							public component2(): number;
							public toString(): string;
							public getFocalInPixelsY(): number;
							public getHeight(): number;
							public component1(): number;
							public component4(): number;
							public component3(): number;
							public equals(param0: any): boolean;
							public copy(param0: number, param1: number, param2: number, param3: number): com.mapbox.vision.mobile.core.models.CameraParameters;
							public getFocalInPixelsX(): number;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class Country {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.Country>;
							public static Unknown: com.mapbox.vision.mobile.core.models.Country;
							public static USA: com.mapbox.vision.mobile.core.models.Country;
							public static China: com.mapbox.vision.mobile.core.models.Country;
							public static Other: com.mapbox.vision.mobile.core.models.Country;
							public static values(): native.Array<com.mapbox.vision.mobile.core.models.Country>;
							public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.Country;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class DeviceMotionData {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.DeviceMotionData>;
							public constructor();
							public getUserAccelerationRelativeToGravity(): native.Array<number>;
							public getHeading(): number;
							public getScreenOrientation(): number;
							public getGravity(): native.Array<number>;
							public getRotations(): native.Array<number>;
							public getOrientations(): native.Array<number>;
							public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: native.Array<number>, param5: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class FrameSegmentation {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.FrameSegmentation>;
							public constructor(param0: com.mapbox.vision.mobile.core.models.frame.Frame, param1: com.mapbox.vision.mobile.core.models.frame.Image);
							public getFrame(): com.mapbox.vision.mobile.core.models.frame.Frame;
							public getSegmentation(): com.mapbox.vision.mobile.core.models.frame.Image;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class FrameStatistics {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.FrameStatistics>;
							public getSegmentationFPS(): number;
							public getSegmentationDetectionFPS(): number;
							public getCoreUpdateFPS(): number;
							public hashCode(): number;
							public component2(): number;
							public toString(): string;
							public getDetectionFPS(): number;
							public component1(): number;
							public component4(): number;
							public component3(): number;
							public copy(param0: number, param1: number, param2: number, param3: number): com.mapbox.vision.mobile.core.models.FrameStatistics;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class HeadingData {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.HeadingData>;
							public constructor(param0: number, param1: native.Array<number>, param2: number);
							public getTimestamp(): number;
							public getGeomagneticHeading(): native.Array<number>;
							public getTrueHeading(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class SegmentationClass {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.SegmentationClass>;
							public static Building: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Car: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Curb: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static FlatNonRoad: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static MarkupLanes: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static MarkupLanesDoubleYellow: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static MarkupOther: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Motorcycle: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Person: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Road: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Sky: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static Unknown: com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.SegmentationClass;
							public static values(): native.Array<com.mapbox.vision.mobile.core.models.SegmentationClass>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export class VideoClip {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.VideoClip>;
							public getStartSeconds(): number;
							public component1(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public component2(): number;
							public toString(): string;
							public copy(param0: number, param1: number): com.mapbox.vision.mobile.core.models.VideoClip;
							public equals(param0: any): boolean;
							public getEndSeconds(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module classification {
							export class FrameSignClassifications {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.classification.FrameSignClassifications>;
								public getSigns(): native.Array<com.mapbox.vision.mobile.core.models.classification.SignClassification>;
								public getFrame(): com.mapbox.vision.mobile.core.models.frame.Frame;
								public constructor(param0: com.mapbox.vision.mobile.core.models.frame.Frame, param1: native.Array<com.mapbox.vision.mobile.core.models.classification.SignClassification>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module classification {
							export class Sign {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.classification.Sign>;
								public constructor(param0: com.mapbox.vision.mobile.core.models.classification.SignType, param1: number);
								public toString(): string;
								public getNumber(): number;
								public equals(param0: any): boolean;
								public component2(): number;
								public getType(): com.mapbox.vision.mobile.core.models.classification.SignType;
								public component1(): com.mapbox.vision.mobile.core.models.classification.SignType;
								public copy(param0: com.mapbox.vision.mobile.core.models.classification.SignType, param1: number): com.mapbox.vision.mobile.core.models.classification.Sign;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module classification {
							export class SignClassification {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.classification.SignClassification>;
								public toString(): string;
								public getNumberConfidence(): number;
								public equals(param0: any): boolean;
								public component3(): number;
								public getSign(): com.mapbox.vision.mobile.core.models.classification.Sign;
								public getDetection(): com.mapbox.vision.mobile.core.models.detection.Detection;
								public constructor(param0: com.mapbox.vision.mobile.core.models.classification.Sign, param1: number, param2: number, param3: com.mapbox.vision.mobile.core.models.detection.Detection);
								public copy(param0: com.mapbox.vision.mobile.core.models.classification.Sign, param1: number, param2: number, param3: com.mapbox.vision.mobile.core.models.detection.Detection): com.mapbox.vision.mobile.core.models.classification.SignClassification;
								public component1(): com.mapbox.vision.mobile.core.models.classification.Sign;
								public component2(): number;
								public component4(): com.mapbox.vision.mobile.core.models.detection.Detection;
								public getTypeConfidence(): number;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module classification {
							export class SignType {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.classification.SignType>;
								public static Unknown: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimit: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitEnd: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitMin: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitNight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitTrucks: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static Mass: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitComplementary: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitExit: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static SpeedLimitRamp: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTurnLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTurnRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningHairpinCurveLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningRoundabout: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningSpeedBump: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningWindingRoad: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static InformationBikeRoute: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static InformationParking: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryAllDirectionsPermitted: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryBicyclesOnly: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDoNotPass: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDoNotDriveOnShoulder: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesAllDirectionsOnRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesGoLeftOrRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesGoStraightOnLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesGoStraightOnRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesTurnLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesTurnLeftOrStraight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDualLanesTurnRightOrStraight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryEndOfSchoolZone: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryGoStraight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryGoStraightOrTurnLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryGoStraightOrTurnRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryHeightLimit: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryLeftTurnYieldOnGreen: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoBicycles: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoEntry: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoLeftOrUTurn: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoLeftTurn: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoMotorVehicles: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoParking: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoParkingOrNoStopping: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoPedestrians: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoRightTurn: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoStopping: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoStraightThrough: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoUTurn: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayStraight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryReversibleLanes: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryRoadClosedToVehicles: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryStop: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTrafficSignalPhotoEnforced: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTripleLanesGoStraightCenterLane: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningBicyclesCrossing: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningHeightRestriction: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningPassLeftOrRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningPedestriansCrossing: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningRoadNarrowsLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningRoadNarrowsRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningSchoolZone: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningStopAhead: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTrafficSignals: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTwoWayTraffic: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningYieldAhead: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static InformationHighway: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryDoNotBlockIntersection: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryKeepRightPicture: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryKeepRightText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoHeavyGoodsVehiclesPicture: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoLeftTurnText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayLeftArrow: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayLeftArrowText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayLeftText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayRightArrow: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayRightArrowText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryOneWayRightText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTurnLeftAhead: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTurnLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTurnLeftOrRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTurnRightAhead: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryYield: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningRailwayCrossing: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningHairpinCurveRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static ComplementaryOneDirectionLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static ComplementaryOneDirectionRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningCurveLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningCurveRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningHorizontalAlignmentLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningHorizontalAlignmentRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryTurnRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WhiteTablesText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static Lanes: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static GreenPlates: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningCrossroads: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningPicture: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static ComplementaryKeepLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static ComplementaryKeepRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryExceptBicycle: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningAddedLaneRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningDeadEndText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningDipText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningEmergencyVehicles: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningEndText: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningFallingRocksOrDebrisRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningLowGroundClearance: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningObstructionMarker: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningPlayground: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningSecondRoadRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTurnLeftOnlyArrow: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTurnLeftOrRightOnlyArrow: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningTramsCrossing: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningUnevenRoad: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningWildAnimals: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryParkingRestrictions: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryYieldOrStopForPedestrians: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoBuses: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoSmallPassengerCar: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoMotorcyclesOrMopeds: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoTurnLeftOrTurnRight: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoOvertaking: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoHonking: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryWidthLimit: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryAxleWeightLimit: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryNoVehiclesCarryingExplosives: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryRoundabout: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryHonking: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryPedestriansCrossing: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryMotorVehicles: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static RegulatoryUTurn: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningSteepAscent: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningSteepDescent: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningVillage: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningKeepSlowdown: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningDangerousTraffic: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningRoadworks: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static WarningSecondRoadLeft: com.mapbox.vision.mobile.core.models.classification.SignType;
								public static values(): native.Array<com.mapbox.vision.mobile.core.models.classification.SignType>;
								public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.classification.SignType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module detection {
							export class Detection {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.detection.Detection>;
								public toString(): string;
								public component2(): globalAndroid.graphics.Rect;
								public equals(param0: any): boolean;
								public component3(): com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public getBoundingBox(): globalAndroid.graphics.Rect;
								public getConfidence(): number;
								public getId(): number;
								public getObjectClass(): com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public component1(): number;
								public component4(): number;
								public constructor(param0: number, param1: globalAndroid.graphics.Rect, param2: com.mapbox.vision.mobile.core.models.detection.DetectionClass, param3: number);
								public copy(param0: number, param1: globalAndroid.graphics.Rect, param2: com.mapbox.vision.mobile.core.models.detection.DetectionClass, param3: number): com.mapbox.vision.mobile.core.models.detection.Detection;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module detection {
							export class DetectionClass {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.detection.DetectionClass>;
								public static Car: com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public static Bicycle: com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public static Person: com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public static TrafficLight: com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public static TrafficSign: com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public static values(): native.Array<com.mapbox.vision.mobile.core.models.detection.DetectionClass>;
								public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.detection.DetectionClass;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module detection {
							export class FrameDetections {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.detection.FrameDetections>;
								public constructor(param0: com.mapbox.vision.mobile.core.models.frame.Frame, param1: native.Array<com.mapbox.vision.mobile.core.models.detection.Detection>);
								public getFrame(): com.mapbox.vision.mobile.core.models.frame.Frame;
								public getDetections(): native.Array<com.mapbox.vision.mobile.core.models.detection.Detection>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module frame {
							export class Frame {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.frame.Frame>;
								public getImage(): com.mapbox.vision.mobile.core.models.frame.Image;
								public getTime(): number;
								public constructor(param0: com.mapbox.vision.mobile.core.models.frame.Image, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module frame {
							export class Image {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.frame.Image>;
								public constructor(param0: number, param1: com.mapbox.vision.mobile.core.models.frame.ImageFormat, param2: com.mapbox.vision.mobile.core.models.frame.ImageSize);
								public getFormat(): com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public getSize(): com.mapbox.vision.mobile.core.models.frame.ImageSize;
								public getIdentifier(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module frame {
							export class ImageFormat {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.frame.ImageFormat>;
								public static Unknown: com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public static RGBA: com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public static BGRA: com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public static RGB: com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public static BGR: com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public static Grayscale8: com.mapbox.vision.mobile.core.models.frame.ImageFormat;
								public static values(): native.Array<com.mapbox.vision.mobile.core.models.frame.ImageFormat>;
								public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.frame.ImageFormat;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module frame {
							export class ImageSize {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.frame.ImageSize>;
								public toString(): string;
								public component1(): number;
								public constructor(param0: number, param1: number);
								public equals(param0: any): boolean;
								public component2(): number;
								public copy(param0: number, param1: number): com.mapbox.vision.mobile.core.models.frame.ImageSize;
								public getImageHeight(): number;
								public getImageWidth(): number;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module frame {
							export class PixelCoordinate {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.frame.PixelCoordinate>;
								public copy(param0: number, param1: number): com.mapbox.vision.mobile.core.models.frame.PixelCoordinate;
								public toString(): string;
								public component1(): number;
								public constructor(param0: number, param1: number);
								public equals(param0: any): boolean;
								public component2(): number;
								public getX(): number;
								public getY(): number;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module position {
							export class GeoCoordinate {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.position.GeoCoordinate>;
								public getLatitude(): number;
								public toString(): string;
								public getLongitude(): number;
								public component1(): number;
								public constructor(param0: number, param1: number);
								public equals(param0: any): boolean;
								public component2(): number;
								public copy(param0: number, param1: number): com.mapbox.vision.mobile.core.models.position.GeoCoordinate;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module position {
							export class GeoLocation {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.position.GeoLocation>;
								public getAzimuth(): number;
								public component1(): com.mapbox.vision.mobile.core.models.position.GeoCoordinate;
								public toString(): string;
								public constructor(param0: com.mapbox.vision.mobile.core.models.position.GeoCoordinate, param1: number);
								public equals(param0: any): boolean;
								public component2(): number;
								public getGeoCoordinate(): com.mapbox.vision.mobile.core.models.position.GeoCoordinate;
								public copy(param0: com.mapbox.vision.mobile.core.models.position.GeoCoordinate, param1: number): com.mapbox.vision.mobile.core.models.position.GeoLocation;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module position {
							export class VehicleState {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.position.VehicleState>;
								public toString(): string;
								public copy(param0: com.mapbox.vision.mobile.core.models.position.GeoLocation, param1: number): com.mapbox.vision.mobile.core.models.position.VehicleState;
								public constructor(param0: com.mapbox.vision.mobile.core.models.position.GeoLocation, param1: number);
								public equals(param0: any): boolean;
								public component2(): number;
								public hashCode(): number;
								public getGeoLocation(): com.mapbox.vision.mobile.core.models.position.GeoLocation;
								public getSpeed(): number;
								public component1(): com.mapbox.vision.mobile.core.models.position.GeoLocation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module road {
							export class Lane {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.road.Lane>;
								public getRightEdge(): com.mapbox.vision.mobile.core.models.road.LaneEdge;
								public toString(): string;
								public component2(): com.mapbox.vision.mobile.core.models.road.LaneEdge;
								public getDirection(): com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public getLeftEdge(): com.mapbox.vision.mobile.core.models.road.LaneEdge;
								public equals(param0: any): boolean;
								public component1(): com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public hashCode(): number;
								public component3(): com.mapbox.vision.mobile.core.models.road.LaneEdge;
								public copy(param0: com.mapbox.vision.mobile.core.models.road.LaneDirection, param1: com.mapbox.vision.mobile.core.models.road.LaneEdge, param2: com.mapbox.vision.mobile.core.models.road.LaneEdge): com.mapbox.vision.mobile.core.models.road.Lane;
								public constructor(param0: com.mapbox.vision.mobile.core.models.road.LaneDirection, param1: com.mapbox.vision.mobile.core.models.road.LaneEdge, param2: com.mapbox.vision.mobile.core.models.road.LaneEdge);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module road {
							export class LaneDirection {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.road.LaneDirection>;
								public static Backward: com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public static Forward: com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public static Reverse: com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public static Unknown: com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.road.LaneDirection;
								public static values(): native.Array<com.mapbox.vision.mobile.core.models.road.LaneDirection>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module road {
							export class LaneEdge {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.road.LaneEdge>;
								public getPoints(): native.Array<com.mapbox.vision.mobile.core.models.world.WorldCoordinate>;
								public getType(): com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public constructor(param0: com.mapbox.vision.mobile.core.models.road.LaneEdgeType, param1: native.Array<com.mapbox.vision.mobile.core.models.world.WorldCoordinate>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module road {
							export class LaneEdgeType {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.road.LaneEdgeType>;
								public static Curb: com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public static Construction: com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public static MarkupDashed: com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public static MarkupDoubleSolid: com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public static MarkupSolid: com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public static Unknown: com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
								public static values(): native.Array<com.mapbox.vision.mobile.core.models.road.LaneEdgeType>;
								public static valueOf(param0: string): com.mapbox.vision.mobile.core.models.road.LaneEdgeType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module road {
							export class RoadDescription {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.road.RoadDescription>;
								public constructor(param0: native.Array<com.mapbox.vision.mobile.core.models.road.Lane>, param1: number, param2: number);
								public getCurrentLaneIndex(): number;
								public getLanes(): native.Array<com.mapbox.vision.mobile.core.models.road.Lane>;
								public getCurrentLanePosition(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module world {
							export class WorldCoordinate {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.world.WorldCoordinate>;
								public toString(): string;
								public component1(): number;
								public constructor(param0: number, param1: number, param2: number);
								public copy(param0: number, param1: number, param2: number): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
								public equals(param0: any): boolean;
								public component2(): number;
								public component3(): number;
								public getX(): number;
								public getY(): number;
								public getZ(): number;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module world {
							export class WorldDescription {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.world.WorldDescription>;
								public constructor(param0: native.Array<com.mapbox.vision.mobile.core.models.world.WorldObject>);
								public getObjects(): native.Array<com.mapbox.vision.mobile.core.models.world.WorldObject>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module models {
						export module world {
							export class WorldObject {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.models.world.WorldObject>;
								public getId(): number;
								public toString(): string;
								public getObjectClass(): com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public component2(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
								public component1(): number;
								public getPosition(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
								public equals(param0: any): boolean;
								public component3(): com.mapbox.vision.mobile.core.models.detection.DetectionClass;
								public copy(param0: number, param1: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param2: com.mapbox.vision.mobile.core.models.detection.DetectionClass): com.mapbox.vision.mobile.core.models.world.WorldObject;
								public hashCode(): number;
								public constructor(param0: number, param1: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param2: com.mapbox.vision.mobile.core.models.detection.DetectionClass);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module telemetry {
						export class TelemetryEventManager {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.telemetry.TelemetryEventManager>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.mobile.core.telemetry.TelemetryEventManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setEventName(param0: string): void;
								setInt(param0: string, param1: number): void;
								setDouble(param0: string, param1: number): void;
								setString(param0: string, param1: string): void;
								pushEvent(): void;
							});
							public constructor();
							public pushEvent(): void;
							public setInt(param0: string, param1: number): void;
							public setEventName(param0: string): void;
							public setDouble(param0: string, param1: number): void;
							public setString(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module telemetry {
						export class TelemetryImageSaver {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.telemetry.TelemetryImageSaver>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.mobile.core.telemetry.TelemetryImageSaver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								saveImage(param0: native.Array<number>, param1: number, param2: number, param3: string): void;
							});
							public constructor();
							public saveImage(param0: native.Array<number>, param1: number, param2: number, param3: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module utils {
						export class SystemInfoUtils {
							public static class: java.lang.Class<com.mapbox.vision.mobile.core.utils.SystemInfoUtils>;
							public static INSTANCE: com.mapbox.vision.mobile.core.utils.SystemInfoUtils;
							public getSnpeSupportedBoard(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module utils {
						export module extentions {
							export class AssetsExtentionsKt {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.utils.extentions.AssetsExtentionsKt>;
								public static copyAssetToDisk(param0: globalAndroid.content.res.AssetManager, param1: string, param2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module mobile {
				export module core {
					export module utils {
						export module snapdragon {
							export class SupportedSnapdragonBoards {
								public static class: java.lang.Class<com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards>;
								public static SDM855: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static SDM845: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static MSM8998: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static MSM8996: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static SDM710: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static SDM660: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static MSM8956: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static MSM8952: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static Companion: com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards.Companion;
								public static valueOf(param0: string): com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards;
								public static values(): native.Array<com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards>;
								public static isBoardSupported(param0: string): boolean;
							}
							export module SupportedSnapdragonBoards {
								export class Companion {
									public static class: java.lang.Class<com.mapbox.vision.mobile.core.utils.snapdragon.SupportedSnapdragonBoards.Companion>;
									public isBoardSupported(param0: string): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:

