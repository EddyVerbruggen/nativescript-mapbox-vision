/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mapbox {
		export module vision {
			export module safety {
				export module core {
					export class BuildConfig {
						public static class: java.lang.Class<com.mapbox.vision.safety.core.BuildConfig>;
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
			export module safety {
				export module core {
					export class NativeSafetyManager {
						public static class: java.lang.Class<com.mapbox.vision.safety.core.NativeSafetyManager>;
						public static Companion: com.mapbox.vision.safety.core.NativeSafetyManager.Companion;
						public constructor();
						public create(param0: number, param1: com.mapbox.vision.safety.core.VisionSafetyListener): void;
						public setTimeToCollisionWithVehicle(param0: number, param1: number): void;
						public destroy(): void;
						public setCollisionMinSpeed(param0: number): void;
					}
					export module NativeSafetyManager {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.safety.core.NativeSafetyManager.Companion>;
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
			export module safety {
				export module core {
					export class VisionSafetyListener {
						public static class: java.lang.Class<com.mapbox.vision.safety.core.VisionSafetyListener>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.safety.core.VisionSafetyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCollisionsUpdated(param0: native.Array<com.mapbox.vision.safety.core.models.CollisionObject>): void;
							onRoadRestrictionsUpdated(param0: com.mapbox.vision.safety.core.models.RoadRestrictions): void;
						});
						public constructor();
						public onCollisionsUpdated(param0: native.Array<com.mapbox.vision.safety.core.models.CollisionObject>): void;
						public onRoadRestrictionsUpdated(param0: com.mapbox.vision.safety.core.models.RoadRestrictions): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module safety {
				export module core {
					export module models {
						export class CollisionDangerLevel {
							public static class: java.lang.Class<com.mapbox.vision.safety.core.models.CollisionDangerLevel>;
							public static None: com.mapbox.vision.safety.core.models.CollisionDangerLevel;
							public static Warning: com.mapbox.vision.safety.core.models.CollisionDangerLevel;
							public static Critical: com.mapbox.vision.safety.core.models.CollisionDangerLevel;
							public static valueOf(param0: string): com.mapbox.vision.safety.core.models.CollisionDangerLevel;
							public static values(): native.Array<com.mapbox.vision.safety.core.models.CollisionDangerLevel>;
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
			export module safety {
				export module core {
					export module models {
						export class CollisionObject {
							public static class: java.lang.Class<com.mapbox.vision.safety.core.models.CollisionObject>;
							public component1(): com.mapbox.vision.mobile.core.models.world.WorldObject;
							public getTimeToImpact(): number;
							public component4(): com.mapbox.vision.mobile.core.models.detection.Detection;
							public hashCode(): number;
							public component2(): number;
							public toString(): string;
							public component3(): com.mapbox.vision.safety.core.models.CollisionDangerLevel;
							public getDangerLevel(): com.mapbox.vision.safety.core.models.CollisionDangerLevel;
							public component5(): com.mapbox.vision.mobile.core.models.frame.Frame;
							public constructor(param0: com.mapbox.vision.mobile.core.models.world.WorldObject, param1: number, param2: com.mapbox.vision.safety.core.models.CollisionDangerLevel, param3: com.mapbox.vision.mobile.core.models.detection.Detection, param4: com.mapbox.vision.mobile.core.models.frame.Frame);
							public getLastDetection(): com.mapbox.vision.mobile.core.models.detection.Detection;
							public getLastFrame(): com.mapbox.vision.mobile.core.models.frame.Frame;
							public getObject(): com.mapbox.vision.mobile.core.models.world.WorldObject;
							public equals(param0: any): boolean;
							public copy(param0: com.mapbox.vision.mobile.core.models.world.WorldObject, param1: number, param2: com.mapbox.vision.safety.core.models.CollisionDangerLevel, param3: com.mapbox.vision.mobile.core.models.detection.Detection, param4: com.mapbox.vision.mobile.core.models.frame.Frame): com.mapbox.vision.safety.core.models.CollisionObject;
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
			export module safety {
				export module core {
					export module models {
						export class RoadRestrictions {
							public static class: java.lang.Class<com.mapbox.vision.safety.core.models.RoadRestrictions>;
							public hashCode(): number;
							public component1(): com.mapbox.vision.safety.core.models.SpeedLimits;
							public getSpeedLimits(): com.mapbox.vision.safety.core.models.SpeedLimits;
							public toString(): string;
							public copy(param0: com.mapbox.vision.safety.core.models.SpeedLimits): com.mapbox.vision.safety.core.models.RoadRestrictions;
							public equals(param0: any): boolean;
							public constructor(param0: com.mapbox.vision.safety.core.models.SpeedLimits);
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
			export module safety {
				export module core {
					export module models {
						export class SpeedLimits {
							public static class: java.lang.Class<com.mapbox.vision.safety.core.models.SpeedLimits>;
							public getCar(): com.mapbox.vision.safety.core.models.SpeedRange;
							public hashCode(): number;
							public toString(): string;
							public copy(param0: com.mapbox.vision.safety.core.models.SpeedRange): com.mapbox.vision.safety.core.models.SpeedLimits;
							public constructor(param0: com.mapbox.vision.safety.core.models.SpeedRange);
							public equals(param0: any): boolean;
							public component1(): com.mapbox.vision.safety.core.models.SpeedRange;
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
			export module safety {
				export module core {
					export module models {
						export class SpeedRange {
							public static class: java.lang.Class<com.mapbox.vision.safety.core.models.SpeedRange>;
							public copy(param0: number, param1: number): com.mapbox.vision.safety.core.models.SpeedRange;
							public component1(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public component2(): number;
							public getMax(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getMin(): number;
						}
					}
				}
			}
		}
	}
}

//Generics information:

