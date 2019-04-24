/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mapbox {
		export module vision {
			export class BuildConfig {
				public static class: java.lang.Class<com.mapbox.vision.BuildConfig>;
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

declare module com {
	export module mapbox {
		export module vision {
			export class ModuleInterface {
				public static class: java.lang.Class<com.mapbox.vision.ModuleInterface>;
				/**
				 * Constructs a new instance of the com.mapbox.vision.ModuleInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					registerModule(param0: number): void;
					unregisterModule(): void;
				});
				public constructor();
				public unregisterModule(): void;
				public registerModule(param0: number): void;
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export class VisionManager {
				public static class: java.lang.Class<com.mapbox.vision.VisionManager>;
				public static INSTANCE: com.mapbox.vision.VisionManager;
				public static pixelToWorld(param0: com.mapbox.vision.mobile.core.models.frame.PixelCoordinate): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
				public static getDetectionsImage(param0: com.mapbox.vision.mobile.core.models.detection.FrameDetections): native.Array<number>;
				public static create(param0: com.mapbox.vision.video.videosource.VideoSource): void;
				public setCountry(param0: com.mapbox.vision.mobile.core.models.Country): void;
				public static worldToPixel(param0: com.mapbox.vision.mobile.core.models.world.WorldCoordinate): com.mapbox.vision.mobile.core.models.frame.PixelCoordinate;
				public static geoToWorld(param0: com.mapbox.vision.mobile.core.models.position.GeoCoordinate): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
				public static destroy(): void;
				public init(param0: globalAndroid.app.Application, param1: string): void;
				public static start(param0: com.mapbox.vision.mobile.core.interfaces.VisionEventsListener): void;
				public static worldToGeo(param0: com.mapbox.vision.mobile.core.models.world.WorldCoordinate): com.mapbox.vision.mobile.core.models.position.GeoCoordinate;
				public static setVideoSourceListener(param0: com.mapbox.vision.video.videosource.VideoSourceListener): void;
				public static stop(): void;
				public static getSegmentationImage(param0: com.mapbox.vision.mobile.core.models.FrameSegmentation): native.Array<number>;
				public static setModelPerformanceConfig(param0: com.mapbox.vision.performance.ModelPerformanceConfig): void;
				public static registerModule(param0: com.mapbox.vision.ModuleInterface): void;
				public static getFrameStatistics(): com.mapbox.vision.mobile.core.models.FrameStatistics;
				public static create(): void;
			}
			export module VisionManager {
				export class WhenMappings {
					public static class: java.lang.Class<com.mapbox.vision.VisionManager.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module location {
				export class LocationEngine {
					public static class: java.lang.Class<com.mapbox.vision.location.LocationEngine>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.location.LocationEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						attach(param0: com.mapbox.vision.mobile.core.interfaces.LocationEngineListener): void;
						detach(): void;
					});
					public constructor();
					public attach(param0: com.mapbox.vision.mobile.core.interfaces.LocationEngineListener): void;
					public detach(): void;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module location {
				export module android {
					export class AndroidLocationEngineImpl extends com.mapbox.vision.location.LocationEngine {
						public static class: java.lang.Class<com.mapbox.vision.location.android.AndroidLocationEngineImpl>;
						public static Companion: com.mapbox.vision.location.android.AndroidLocationEngineImpl.Companion;
						public onProviderEnabled(param0: string): void;
						public constructor(param0: globalAndroid.content.Context);
						public attach(param0: com.mapbox.vision.mobile.core.interfaces.LocationEngineListener): void;
						public onLocationChanged(param0: globalAndroid.location.Location): void;
						public detach(): void;
						public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
						public onProviderDisabled(param0: string): void;
					}
					export module AndroidLocationEngineImpl {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.location.android.AndroidLocationEngineImpl.Companion>;
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
			export module performance {
				export abstract class ModelPerformance {
					public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformance>;
				}
				export module ModelPerformance {
					export class Off extends com.mapbox.vision.performance.ModelPerformance {
						public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformance.Off>;
						public static INSTANCE: com.mapbox.vision.performance.ModelPerformance.Off;
					}
					export class On extends com.mapbox.vision.performance.ModelPerformance {
						public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformance.On>;
						public copy(param0: com.mapbox.vision.performance.ModelPerformanceMode, param1: com.mapbox.vision.performance.ModelPerformanceRate): com.mapbox.vision.performance.ModelPerformance.On;
						public getRate(): com.mapbox.vision.performance.ModelPerformanceRate;
						public component1(): com.mapbox.vision.performance.ModelPerformanceMode;
						public getMode(): com.mapbox.vision.performance.ModelPerformanceMode;
						public constructor(param0: com.mapbox.vision.performance.ModelPerformanceMode, param1: com.mapbox.vision.performance.ModelPerformanceRate);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component2(): com.mapbox.vision.performance.ModelPerformanceRate;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module performance {
				export abstract class ModelPerformanceConfig {
					public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformanceConfig>;
				}
				export module ModelPerformanceConfig {
					export class Merged extends com.mapbox.vision.performance.ModelPerformanceConfig {
						public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformanceConfig.Merged>;
						public copy(param0: com.mapbox.vision.performance.ModelPerformance): com.mapbox.vision.performance.ModelPerformanceConfig.Merged;
						public constructor(param0: com.mapbox.vision.performance.ModelPerformance);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPerformance(): com.mapbox.vision.performance.ModelPerformance;
						public component1(): com.mapbox.vision.performance.ModelPerformance;
						public toString(): string;
					}
					export class Separate extends com.mapbox.vision.performance.ModelPerformanceConfig {
						public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformanceConfig.Separate>;
						public getDetectionPerformance(): com.mapbox.vision.performance.ModelPerformance;
						public constructor(param0: com.mapbox.vision.performance.ModelPerformance, param1: com.mapbox.vision.performance.ModelPerformance);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: com.mapbox.vision.performance.ModelPerformance, param1: com.mapbox.vision.performance.ModelPerformance): com.mapbox.vision.performance.ModelPerformanceConfig.Separate;
						public component2(): com.mapbox.vision.performance.ModelPerformance;
						public component1(): com.mapbox.vision.performance.ModelPerformance;
						public getSegmentationPerformance(): com.mapbox.vision.performance.ModelPerformance;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module performance {
				export class ModelPerformanceMode {
					public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformanceMode>;
					public static FIXED: com.mapbox.vision.performance.ModelPerformanceMode;
					public static DYNAMIC: com.mapbox.vision.performance.ModelPerformanceMode;
					public static values(): native.Array<com.mapbox.vision.performance.ModelPerformanceMode>;
					public static valueOf(param0: string): com.mapbox.vision.performance.ModelPerformanceMode;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module performance {
				export class ModelPerformanceRate {
					public static class: java.lang.Class<com.mapbox.vision.performance.ModelPerformanceRate>;
					public static LOW: com.mapbox.vision.performance.ModelPerformanceRate;
					public static MEDIUM: com.mapbox.vision.performance.ModelPerformanceRate;
					public static HIGH: com.mapbox.vision.performance.ModelPerformanceRate;
					public static values(): native.Array<com.mapbox.vision.performance.ModelPerformanceRate>;
					public static valueOf(param0: string): com.mapbox.vision.performance.ModelPerformanceRate;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module performance {
				export class PerformanceManager {
					public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.performance.PerformanceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setModelConfig(param0: com.mapbox.vision.performance.ModelPerformanceConfig): void;
						<clinit>(): void;
					});
					public constructor();
					public static Companion: com.mapbox.vision.performance.PerformanceManager.Companion;
					public setModelConfig(param0: com.mapbox.vision.performance.ModelPerformanceConfig): void;
				}
				export module PerformanceManager {
					export class Companion {
						public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.Companion>;
						public getPerformanceManager(param0: com.mapbox.vision.mobile.core.NativeVisionManager): com.mapbox.vision.performance.PerformanceManager;
					}
					export class SnapdragonImpl extends com.mapbox.vision.performance.PerformanceManager {
						public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl>;
						public static Companion: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion;
						public setModelConfig(param0: com.mapbox.vision.performance.ModelPerformanceConfig): void;
						public constructor(param0: com.mapbox.vision.mobile.core.NativeVisionManager, param1: string);
					}
					export module SnapdragonImpl {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion>;
						}
						export module Companion {
							export class Fps {
								public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps>;
								public toString(): string;
								public constructor(param0: number);
								public getValue(): number;
								public component1(): number;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public copy(param0: number): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
							}
							export class ModelsFps {
								public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.ModelsFps>;
								public toString(): string;
								public getDetectionFps(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
								public constructor(param0: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps, param1: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps, param2: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps);
								public component1(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
								public equals(param0: any): boolean;
								public getMergedFpsRange(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
								public component3(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
								public copy(param0: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps, param1: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps, param2: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.ModelsFps;
								public getSegmentationFps(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
								public hashCode(): number;
								public component2(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.Fps;
							}
							export abstract class SnpeBoard {
								public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard>;
								public static Companion: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Companion;
								public getMaxFps(param0: com.mapbox.vision.performance.ModelPerformance): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.ModelsFps;
								public getMinBackgroundFps(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.ModelsFps;
								public getMinWorkingFps(): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.ModelsFps;
							}
							export module SnpeBoard {
								export class Companion {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Companion>;
									public fromBoardName(param0: string): com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard;
								}
								export class Snapdragon_660 extends com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_660>;
									public static INSTANCE: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_660;
								}
								export class Snapdragon_710 extends com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_710>;
									public static INSTANCE: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_710;
								}
								export class Snapdragon_821 extends com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_821>;
									public static INSTANCE: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_821;
								}
								export class Snapdragon_835 extends com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_835>;
									public static INSTANCE: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_835;
								}
								export class Snapdragon_845 extends com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_845>;
									public static INSTANCE: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_845;
								}
								export class Snapdragon_855 extends com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_855>;
									public static INSTANCE: com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.Snapdragon_855;
								}
								export class WhenMappings {
									public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.Companion.SnpeBoard.WhenMappings>;
								}
							}
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.mapbox.vision.performance.PerformanceManager.SnapdragonImpl.WhenMappings>;
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
			export module sensors {
				export class SensorDataListener {
					public static class: java.lang.Class<com.mapbox.vision.sensors.SensorDataListener>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.sensors.SensorDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeviceMotionData(param0: com.mapbox.vision.mobile.core.models.DeviceMotionData): void;
						onHeadingData(param0: com.mapbox.vision.mobile.core.models.HeadingData): void;
					});
					public constructor();
					public onHeadingData(param0: com.mapbox.vision.mobile.core.models.HeadingData): void;
					public onDeviceMotionData(param0: com.mapbox.vision.mobile.core.models.DeviceMotionData): void;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module sensors {
				export class SensorsManager {
					public static class: java.lang.Class<com.mapbox.vision.sensors.SensorsManager>;
					public static Companion: com.mapbox.vision.sensors.SensorsManager.Companion;
					public setSensorDataListener(param0: com.mapbox.vision.sensors.SensorDataListener): void;
					public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
					public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
					public stop(): void;
					public start(): void;
					public constructor(param0: globalAndroid.app.Application);
				}
				export module SensorsManager {
					export class Companion {
						public static class: java.lang.Class<com.mapbox.vision.sensors.SensorsManager.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module telemetry {
				export class AttachmentManager {
					public static class: java.lang.Class<com.mapbox.vision.telemetry.AttachmentManager>;
					public addFileAttachment(param0: string, param1: okhttp3.MediaType, param2: com.mapbox.android.telemetry.AttachmentMetadata): void;
					public pushEvent(): void;
					public constructor(param0: com.mapbox.android.telemetry.MapboxTelemetry);
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module telemetry {
				export class MapboxTelemetryEventManager {
					public static class: java.lang.Class<com.mapbox.vision.telemetry.MapboxTelemetryEventManager>;
					public setString(param0: string, param1: string): void;
					public pushEvent(): void;
					public setDouble(param0: string, param1: number): void;
					public constructor(param0: com.mapbox.android.telemetry.MapboxTelemetry);
					public setInt(param0: string, param1: number): void;
					public setEventName(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module telemetry {
				export class TelemetryImageSaver {
					public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetryImageSaver>;
					public saveImage(param0: native.Array<number>, param1: number, param2: number, param3: string): void;
					public constructor();
					public setSessionDir(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module telemetry {
				export class TelemetrySessionManager {
					public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySessionManager>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.telemetry.TelemetrySessionManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(): void;
						stop(): void;
					});
					public constructor();
					public stop(): void;
					public start(): void;
				}
				export module TelemetrySessionManager {
					export class RotatedBuffers {
						public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySessionManager.RotatedBuffers>;
						public static Companion: com.mapbox.vision.telemetry.TelemetrySessionManager.RotatedBuffers.Companion;
						public constructor(param0: string, param1: number);
						public rotate(): void;
						public getBuffer(): string;
					}
					export module RotatedBuffers {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySessionManager.RotatedBuffers.Companion>;
						}
					}
					export class RotatedBuffersImpl extends com.mapbox.vision.telemetry.TelemetrySessionManager {
						public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySessionManager.RotatedBuffersImpl>;
						public static Companion: com.mapbox.vision.telemetry.TelemetrySessionManager.RotatedBuffersImpl.Companion;
						public start(): void;
						public constructor(param0: globalAndroid.app.Application, param1: com.mapbox.vision.mobile.core.NativeVisionManager, param2: string, param3: com.mapbox.vision.video.videosource.camera.VideoRecorder, param4: com.mapbox.vision.telemetry.TelemetryImageSaver, param5: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>);
						public stop(): void;
					}
					export module RotatedBuffersImpl {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySessionManager.RotatedBuffersImpl.Companion>;
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
			export module telemetry {
				export class TelemetrySyncManager {
					public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySyncManager>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.telemetry.TelemetrySyncManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(): void;
						stop(): void;
						syncSessionDir(param0: string): void;
						<clinit>(): void;
					});
					public constructor();
					public static Companion: com.mapbox.vision.telemetry.TelemetrySyncManager.Companion;
					public stop(): void;
					public syncSessionDir(param0: string): void;
					public start(): void;
				}
				export module TelemetrySyncManager {
					export class AttachmentProperties {
						public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySyncManager.AttachmentProperties>;
						public getMediaType(): okhttp3.MediaType;
						public constructor(param0: string, param1: com.mapbox.android.telemetry.AttachmentMetadata, param2: okhttp3.MediaType);
						public getAbsolutePath(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component2(): com.mapbox.android.telemetry.AttachmentMetadata;
						public getMetadata(): com.mapbox.android.telemetry.AttachmentMetadata;
						public copy(param0: string, param1: com.mapbox.android.telemetry.AttachmentMetadata, param2: okhttp3.MediaType): com.mapbox.vision.telemetry.TelemetrySyncManager.AttachmentProperties;
						public toString(): string;
						public component3(): okhttp3.MediaType;
					}
					export class Companion {
						public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySyncManager.Companion>;
					}
					export class Impl extends com.mapbox.vision.telemetry.TelemetrySyncManager {
						public static class: java.lang.Class<com.mapbox.vision.telemetry.TelemetrySyncManager.Impl>;
						public onAttachmentFailure(param0: string, param1: java.util.List<string>): void;
						public start(): void;
						public constructor(param0: com.mapbox.android.telemetry.MapboxTelemetry, param1: globalAndroid.content.Context, param2: string);
						public syncSessionDir(param0: string): void;
						public stop(): void;
						public onAttachmentResponse(param0: string, param1: number, param2: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module telemetry {
				export class TotalBytesCounter {
					public static class: java.lang.Class<com.mapbox.vision.telemetry.TotalBytesCounter>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.telemetry.TotalBytesCounter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trackSentBytes(param0: number): boolean;
						millisToNextSession(): number;
					});
					public constructor();
					public trackSentBytes(param0: number): boolean;
					public millisToNextSession(): number;
				}
				export module TotalBytesCounter {
					export class Impl extends com.mapbox.vision.telemetry.TotalBytesCounter {
						public static class: java.lang.Class<com.mapbox.vision.telemetry.TotalBytesCounter.Impl>;
						public static Companion: com.mapbox.vision.telemetry.TotalBytesCounter.Impl.Companion;
						public constructor();
						public millisToNextSession(): number;
						public constructor(param0: number, param1: number);
						public trackSentBytes(param0: number): boolean;
					}
					export module Impl {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.telemetry.TotalBytesCounter.Impl.Companion>;
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
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<com.mapbox.vision.utils.FileUtils>;
					public static INSTANCE: com.mapbox.vision.utils.FileUtils;
					public getAppRelativeDir(param0: globalAndroid.content.Context, param1: string): string;
					public getAbsoluteDir(param0: string): string;
					public getAbsoluteFile(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module utils {
				export class UuidHolder {
					public static class: java.lang.Class<com.mapbox.vision.utils.UuidHolder>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.utils.UuidHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(): void;
						stop(): void;
						<clinit>(): void;
					});
					public constructor();
					public static Companion: com.mapbox.vision.utils.UuidHolder.Companion;
					public stop(): void;
					public start(): void;
				}
				export module UuidHolder {
					export class Companion {
						public static class: java.lang.Class<com.mapbox.vision.utils.UuidHolder.Companion>;
					}
					export class Impl extends com.mapbox.vision.utils.UuidHolder {
						public static class: java.lang.Class<com.mapbox.vision.utils.UuidHolder.Impl>;
						public getUniqueId(): string;
						public constructor(param0: globalAndroid.content.Context);
						public start(): void;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module utils {
				export class VisionLogger {
					public static class: java.lang.Class<com.mapbox.vision.utils.VisionLogger>;
					/**
					 * Constructs a new instance of the com.mapbox.vision.utils.VisionLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						v(param0: string, param1: string): void;
						v(param0: java.lang.Throwable, param1: string, param2: string): void;
						d(param0: string, param1: string): void;
						d(param0: java.lang.Throwable, param1: string, param2: string): void;
						i(param0: string, param1: string): void;
						i(param0: java.lang.Throwable, param1: string, param2: string): void;
						w(param0: string, param1: string): void;
						w(param0: java.lang.Throwable, param1: string, param2: string): void;
						e(param0: string, param1: string): void;
						e(param0: java.lang.Throwable, param1: string, param2: string): void;
						<clinit>(): void;
					});
					public constructor();
					public static Companion: com.mapbox.vision.utils.VisionLogger.Companion;
					public v(param0: java.lang.Throwable, param1: string, param2: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string): void;
					public w(param0: java.lang.Throwable, param1: string, param2: string): void;
					public d(param0: java.lang.Throwable, param1: string, param2: string): void;
					public e(param0: java.lang.Throwable, param1: string, param2: string): void;
					public i(param0: java.lang.Throwable, param1: string, param2: string): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
				}
				export module VisionLogger {
					export class Companion {
						public static class: java.lang.Class<com.mapbox.vision.utils.VisionLogger.Companion>;
						public i(param0: java.lang.Throwable, param1: string, param2: string): void;
						public w(param0: string, param1: string): void;
						public d(param0: java.lang.Throwable, param1: string, param2: string): void;
						public v(param0: string, param1: string): void;
						public v(param0: java.lang.Throwable, param1: string, param2: string): void;
						public setLogger(param0: com.mapbox.vision.utils.VisionLogger): void;
						public w(param0: java.lang.Throwable, param1: string, param2: string): void;
						public e(param0: string, param1: string): void;
						public e(param0: java.lang.Throwable, param1: string, param2: string): void;
						public d(param0: string, param1: string): void;
						public i(param0: string, param1: string): void;
					}
					export class Impl extends com.mapbox.vision.utils.VisionLogger {
						public static class: java.lang.Class<com.mapbox.vision.utils.VisionLogger.Impl>;
						public i(param0: java.lang.Throwable, param1: string, param2: string): void;
						public w(param0: string, param1: string): void;
						public constructor();
						public d(param0: java.lang.Throwable, param1: string, param2: string): void;
						public constructor(param0: number);
						public v(param0: string, param1: string): void;
						public v(param0: java.lang.Throwable, param1: string, param2: string): void;
						public w(param0: java.lang.Throwable, param1: string, param2: string): void;
						public e(param0: string, param1: string): void;
						public e(param0: java.lang.Throwable, param1: string, param2: string): void;
						public d(param0: string, param1: string): void;
						public i(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module utils {
				export module drawer {
					export module detections {
						export class DetectionDrawer {
							public static class: java.lang.Class<com.mapbox.vision.utils.drawer.detections.DetectionDrawer>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.utils.drawer.detections.DetectionDrawer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								draw(param0: globalAndroid.graphics.Bitmap, param1: native.Array<com.mapbox.vision.mobile.core.models.detection.Detection>): void;
							});
							public constructor();
							public draw(param0: globalAndroid.graphics.Bitmap, param1: native.Array<com.mapbox.vision.mobile.core.models.detection.Detection>): void;
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
			export module utils {
				export module drawer {
					export module detections {
						export class DetectionDrawerImpl extends com.mapbox.vision.utils.drawer.detections.DetectionDrawer {
							public static class: java.lang.Class<com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl>;
							public constructor();
							public draw(param0: globalAndroid.graphics.Bitmap, param1: native.Array<com.mapbox.vision.mobile.core.models.detection.Detection>): void;
						}
						export module DetectionDrawerImpl {
							export class TypeModel {
								public static class: java.lang.Class<com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel>;
								public static Car: com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel;
								public static Bicycle: com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel;
								public static Person: com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel;
								public static Light: com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel;
								public static Sign: com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel;
								public static valueOf(param0: string): com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel;
								public static values(): native.Array<com.mapbox.vision.utils.drawer.detections.DetectionDrawerImpl.TypeModel>;
								public getTypeName(): string;
								public getColor(): number;
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
			export module utils {
				export module file {
					export class FileCompressor {
						public static class: java.lang.Class<com.mapbox.vision.utils.file.FileCompressor>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.utils.file.FileCompressor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							compress(param0: native.Array<java.io.File>, param1: string): void;
						});
						public constructor();
						public compress(param0: native.Array<java.io.File>, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module utils {
				export module file {
					export class ZipFileCompressorImpl extends com.mapbox.vision.utils.file.FileCompressor {
						public static class: java.lang.Class<com.mapbox.vision.utils.file.ZipFileCompressorImpl>;
						public static Companion: com.mapbox.vision.utils.file.ZipFileCompressorImpl.Companion;
						public constructor();
						public compress(param0: native.Array<java.io.File>, param1: string): void;
					}
					export module ZipFileCompressorImpl {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.utils.file.ZipFileCompressorImpl.Companion>;
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
			export module utils {
				export module threads {
					export class ThreadHandler {
						public static class: java.lang.Class<com.mapbox.vision.utils.threads.ThreadHandler>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.utils.threads.ThreadHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							post(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
							postDelayed(param0: kotlin.jvm.functions.Function0<kotlin.Unit>, param1: number): void;
							start(): void;
							stop(): void;
							removeAllTasks(): void;
							isStarted(): boolean;
						});
						public constructor();
						public start(): void;
						public isStarted(): boolean;
						public stop(): void;
						public removeAllTasks(): void;
						public post(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
						public postDelayed(param0: kotlin.jvm.functions.Function0<kotlin.Unit>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module utils {
				export module threads {
					export class WorkThreadHandler extends com.mapbox.vision.utils.threads.ThreadHandler {
						public static class: java.lang.Class<com.mapbox.vision.utils.threads.WorkThreadHandler>;
						public handler: globalAndroid.os.Handler;
						public static Companion: com.mapbox.vision.utils.threads.WorkThreadHandler.Companion;
						public getHandler(): globalAndroid.os.Handler;
						public constructor();
						public start(): void;
						public isStarted(): boolean;
						public setHandler(param0: globalAndroid.os.Handler): void;
						public stop(): void;
						public removeAllTasks(): void;
						public post(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
						public postDelayed(param0: kotlin.jvm.functions.Function0<kotlin.Unit>, param1: number): void;
						public constructor(param0: string);
					}
					export module WorkThreadHandler {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.utils.threads.WorkThreadHandler.Companion>;
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
			export module video {
				export module videoprocessor {
					export class VideoProcessor {
						public static class: java.lang.Class<com.mapbox.vision.video.videoprocessor.VideoProcessor>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.video.videoprocessor.VideoProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attach(param0: com.mapbox.vision.video.videoprocessor.VideoProcessorListener): void;
							detach(): void;
							splitVideoClips(param0: native.Array<com.mapbox.vision.mobile.core.models.VideoClip>, param1: string, param2: string, param3: number): void;
						});
						public constructor();
						public attach(param0: com.mapbox.vision.video.videoprocessor.VideoProcessorListener): void;
						public detach(): void;
						public splitVideoClips(param0: native.Array<com.mapbox.vision.mobile.core.models.VideoClip>, param1: string, param2: string, param3: number): void;
					}
					export module VideoProcessor {
						export class Impl extends com.mapbox.vision.video.videoprocessor.VideoProcessor {
							public static class: java.lang.Class<com.mapbox.vision.video.videoprocessor.VideoProcessor.Impl>;
							public static Companion: com.mapbox.vision.video.videoprocessor.VideoProcessor.Impl.Companion;
							public constructor();
							public detach(): void;
							public attach(param0: com.mapbox.vision.video.videoprocessor.VideoProcessorListener): void;
							public splitVideoClips(param0: native.Array<com.mapbox.vision.mobile.core.models.VideoClip>, param1: string, param2: string, param3: number): void;
						}
						export module Impl {
							export class Companion {
								public static class: java.lang.Class<com.mapbox.vision.video.videoprocessor.VideoProcessor.Impl.Companion>;
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
			export module video {
				export module videoprocessor {
					export class VideoProcessorListener {
						public static class: java.lang.Class<com.mapbox.vision.video.videoprocessor.VideoProcessorListener>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.video.videoprocessor.VideoProcessorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoClipsReady(param0: java.util.HashMap<string,com.mapbox.vision.mobile.core.models.VideoClip>, param1: string, param2: string): void;
						});
						public constructor();
						public onVideoClipsReady(param0: java.util.HashMap<string,com.mapbox.vision.mobile.core.models.VideoClip>, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module video {
				export module videosource {
					export class VideoRecordingListener {
						public static class: java.lang.Class<com.mapbox.vision.video.videosource.VideoRecordingListener>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.video.videosource.VideoRecordingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoRecorded(param0: string): void;
						});
						public constructor();
						public onVideoRecorded(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module video {
				export module videosource {
					export class VideoSource {
						public static class: java.lang.Class<com.mapbox.vision.video.videosource.VideoSource>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.video.videosource.VideoSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attach(param0: com.mapbox.vision.video.videosource.VideoSourceListener): void;
							detach(): void;
						});
						public constructor();
						public attach(param0: com.mapbox.vision.video.videosource.VideoSourceListener): void;
						public detach(): void;
					}
					export module VideoSource {
						export class WithProgress {
							public static class: java.lang.Class<com.mapbox.vision.video.videosource.VideoSource.WithProgress>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.video.videosource.VideoSource$WithProgress interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setProgress(param0: number): void;
								getProgress(): number;
							});
							public constructor();
							public getProgress(): number;
							public setProgress(param0: number): void;
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
			export module video {
				export module videosource {
					export class VideoSourceListener {
						public static class: java.lang.Class<com.mapbox.vision.video.videosource.VideoSourceListener>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.video.videosource.VideoSourceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onNewFrame(param0: native.Array<number>, param1: com.mapbox.vision.mobile.core.models.frame.ImageFormat, param2: com.mapbox.vision.mobile.core.models.frame.ImageSize): void;
							onNewCameraParameters(param0: com.mapbox.vision.mobile.core.models.CameraParameters): void;
						});
						public constructor();
						public onNewCameraParameters(param0: com.mapbox.vision.mobile.core.models.CameraParameters): void;
						public onNewFrame(param0: native.Array<number>, param1: com.mapbox.vision.mobile.core.models.frame.ImageFormat, param2: com.mapbox.vision.mobile.core.models.frame.ImageSize): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module video {
				export module videosource {
					export module camera {
						export class Camera2VideoSourceImpl extends com.mapbox.vision.video.videosource.VideoSource {
							public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.Camera2VideoSourceImpl>;
							public static Companion: com.mapbox.vision.video.videosource.camera.Camera2VideoSourceImpl.Companion;
							public detach(): void;
							public setVideoRecorder$mapbox_android_vision_release(param0: com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder): void;
							public attach(param0: com.mapbox.vision.video.videosource.VideoSourceListener): void;
							public constructor(param0: globalAndroid.app.Application, param1: number, param2: number);
						}
						export module Camera2VideoSourceImpl {
							export class Companion {
								public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.Camera2VideoSourceImpl.Companion>;
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
			export module video {
				export module videosource {
					export module camera {
						export class SurfaceVideoRecorder extends com.mapbox.vision.video.videosource.camera.VideoRecorder {
							public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSurface(): globalAndroid.view.Surface;
								init(param0: number, param1: number, param2: number): void;
								startRecording(param0: string): void;
								stopRecording(): void;
								release(): void;
							});
							public constructor();
							public init(param0: number, param1: number, param2: number): void;
							public stopRecording(): void;
							public getSurface(): globalAndroid.view.Surface;
							public release(): void;
							public startRecording(param0: string): void;
						}
						export module SurfaceVideoRecorder {
							export class MediaCodecPersistentSurfaceImpl extends com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder {
								public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder.MediaCodecPersistentSurfaceImpl>;
								public static Companion: com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder.MediaCodecPersistentSurfaceImpl.Companion;
								public setSurface(param0: globalAndroid.view.Surface): void;
								public init(param0: number, param1: number, param2: number): void;
								public startRecording(param0: string): void;
								public constructor(param0: globalAndroid.app.Application);
								public stopRecording(): void;
								public getSurface(): globalAndroid.view.Surface;
								public release(): void;
							}
							export module MediaCodecPersistentSurfaceImpl {
								export class Companion {
									public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.SurfaceVideoRecorder.MediaCodecPersistentSurfaceImpl.Companion>;
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
			export module video {
				export module videosource {
					export module camera {
						export class VideoRecorder {
							public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.VideoRecorder>;
							/**
							 * Constructs a new instance of the com.mapbox.vision.video.videosource.camera.VideoRecorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(param0: number, param1: number, param2: number): void;
								startRecording(param0: string): void;
								stopRecording(): void;
								release(): void;
							});
							public constructor();
							public init(param0: number, param1: number, param2: number): void;
							public stopRecording(): void;
							public release(): void;
							public startRecording(param0: string): void;
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
			export module video {
				export module videosource {
					export module camera {
						export class YuvAllocation2Rgba {
							public static class: java.lang.Class<com.mapbox.vision.video.videosource.camera.YuvAllocation2Rgba>;
							public onBufferAvailable(param0: globalAndroid.renderscript.Allocation): void;
							public constructor(param0: globalAndroid.renderscript.RenderScript, param1: com.mapbox.vision.mobile.core.models.frame.ImageSize, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
							public release(): void;
							public getInputSurface(): globalAndroid.view.Surface;
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
			export module view {
				export class VisionView implements com.mapbox.vision.video.videosource.VideoSourceListener {
					public static class: java.lang.Class<com.mapbox.vision.view.VisionView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onNewFrame(param0: native.Array<number>, param1: com.mapbox.vision.mobile.core.models.frame.ImageFormat, param2: com.mapbox.vision.mobile.core.models.frame.ImageSize): void;
					public getVisualizationMode(): com.mapbox.vision.view.VisualizationMode;
					public setDetections(param0: com.mapbox.vision.mobile.core.models.detection.FrameDetections): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setBytes(param0: native.Array<number>): void;
					public setVisualizationMode(param0: com.mapbox.vision.view.VisualizationMode): void;
					public setSegmentation(param0: com.mapbox.vision.mobile.core.models.FrameSegmentation): void;
					public onNewCameraParameters(param0: com.mapbox.vision.mobile.core.models.CameraParameters): void;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module view {
				export class VisualizationMode {
					public static class: java.lang.Class<com.mapbox.vision.view.VisualizationMode>;
					public static Clear: com.mapbox.vision.view.VisualizationMode;
					public static Segmentation: com.mapbox.vision.view.VisualizationMode;
					public static Detections: com.mapbox.vision.view.VisualizationMode;
					public static values(): native.Array<com.mapbox.vision.view.VisualizationMode>;
					public static valueOf(param0: string): com.mapbox.vision.view.VisualizationMode;
				}
			}
		}
	}
}

//Generics information:

