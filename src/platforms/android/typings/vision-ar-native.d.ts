/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module core {
					export class BuildConfig {
						public static class: java.lang.Class<com.mapbox.vision.ar.core.BuildConfig>;
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
			export module ar {
				export module core {
					export class NativeArManager {
						public static class: java.lang.Class<com.mapbox.vision.ar.core.NativeArManager>;
						public static Companion: com.mapbox.vision.ar.core.NativeArManager.Companion;
						public setLaneLength(param0: number): void;
						public constructor();
						public setRoute(param0: com.mapbox.vision.ar.core.models.Route): void;
						public destroy(): void;
						public create(param0: number, param1: com.mapbox.vision.ar.core.VisionArEventsListener): void;
					}
					export module NativeArManager {
						export class Companion {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.NativeArManager.Companion>;
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
			export module ar {
				export module core {
					export class VisionArEventsListener {
						public static class: java.lang.Class<com.mapbox.vision.ar.core.VisionArEventsListener>;
						/**
						 * Constructs a new instance of the com.mapbox.vision.ar.core.VisionArEventsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onArCameraUpdated(param0: com.mapbox.vision.ar.core.models.ArCamera): void;
							onArLaneUpdated(param0: com.mapbox.vision.ar.core.models.ArLane): void;
						});
						public constructor();
						public onArLaneUpdated(param0: com.mapbox.vision.ar.core.models.ArLane): void;
						public onArCameraUpdated(param0: com.mapbox.vision.ar.core.models.ArCamera): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module core {
					export module models {
						export class ArCamera {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.models.ArCamera>;
							public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): com.mapbox.vision.ar.core.models.ArCamera;
							public hashCode(): number;
							public component2(): number;
							public component5(): number;
							public getPitch(): number;
							public toString(): string;
							public getHeight(): number;
							public getAspectRatio(): number;
							public component1(): number;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
							public component4(): number;
							public component6(): number;
							public component3(): number;
							public getVerticalFOV(): number;
							public equals(param0: any): boolean;
							public getYaw(): number;
							public getRoll(): number;
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
			export module ar {
				export module core {
					export module models {
						export class ArLane {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.models.ArLane>;
							public getBezierCurve(): com.mapbox.vision.ar.core.models.BezierCubic3D;
							public hashCode(): number;
							public copy(param0: com.mapbox.vision.ar.core.models.BezierCubic3D): com.mapbox.vision.ar.core.models.ArLane;
							public toString(): string;
							public component1(): com.mapbox.vision.ar.core.models.BezierCubic3D;
							public constructor(param0: com.mapbox.vision.ar.core.models.BezierCubic3D);
							public equals(param0: any): boolean;
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
			export module ar {
				export module core {
					export module models {
						export class BezierCubic3D {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.models.BezierCubic3D>;
							public hashCode(): number;
							public getP4(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public getP2(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public getP3(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public toString(): string;
							public component4(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public component1(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public component3(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public component2(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public constructor(param0: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param1: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param2: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param3: com.mapbox.vision.mobile.core.models.world.WorldCoordinate);
							public getP1(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
							public copy(param0: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param1: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param2: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param3: com.mapbox.vision.mobile.core.models.world.WorldCoordinate): com.mapbox.vision.ar.core.models.BezierCubic3D;
							public equals(param0: any): boolean;
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
			export module ar {
				export module core {
					export module models {
						export class Color {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.models.Color>;
							public getA(): number;
							public getB(): number;
							public getG(): number;
							public getR(): number;
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
			export module ar {
				export module core {
					export module models {
						export class Route {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.models.Route>;
							public getSourceStreetName(): string;
							public getPoints(): native.Array<com.mapbox.vision.ar.core.models.RoutePoint>;
							public constructor(param0: native.Array<com.mapbox.vision.ar.core.models.RoutePoint>, param1: number, param2: string, param3: string);
							public getTargetStreetName(): string;
							public getEta(): number;
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
			export module ar {
				export module core {
					export module models {
						export class RoutePoint {
							public static class: java.lang.Class<com.mapbox.vision.ar.core.models.RoutePoint>;
							public constructor(param0: com.mapbox.vision.mobile.core.models.position.GeoCoordinate);
							public getGeoCoordinate(): com.mapbox.vision.mobile.core.models.position.GeoCoordinate;
						}
					}
				}
			}
		}
	}
}

//Generics information:

