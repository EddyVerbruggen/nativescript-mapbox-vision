/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mapbox {
		export module vision {
			export module safety {
				export class BuildConfig {
					public static class: java.lang.Class<com.mapbox.vision.safety.BuildConfig>;
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

declare module com {
	export module mapbox {
		export module vision {
			export module safety {
				export class VisionSafetyManager {
					public static class: java.lang.Class<com.mapbox.vision.safety.VisionSafetyManager>;
					public static INSTANCE: com.mapbox.vision.safety.VisionSafetyManager;
					public static setCollisionMinSpeed(param0: number): void;
					public static create(param0: com.mapbox.vision.VisionManager, param1: com.mapbox.vision.safety.core.VisionSafetyListener): void;
					public registerModule(param0: number): void;
					public static destroy(): void;
					public unregisterModule(): void;
					public static setTimeToCollisionWithVehicle(param0: number, param1: number): void;
				}
			}
		}
	}
}

//Generics information:

